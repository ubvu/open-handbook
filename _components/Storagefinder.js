import './Storagefinder.css'

function Storagefinder() {
  const [data, setData] = React.useState(null);
  const [filters, setFilters] = React.useState({});
  const [selectedPanel, setSelectedPanel] = React.useState(null);

  React.useEffect(() => {
    fetch('public/storagefinder.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  const applyFilters = (panel) => {
    // If panel title is "Custom Solutions", always return true
    if (panel.title === "Custom solutions") {
      return true;
    }

    return Object.entries(filters).every(([code, selected]) => {
      if (!selected || selected.length === 0) return true;
      const panelFilter = panel.filterOptions.find(f => f.filterCode === code);
      if (!panelFilter) return false;
      return selected.every(val => panelFilter.values.includes(val));
    });
  };

  const panelsWithStatus = data.panels.map(panel => ({
    ...panel,
    active: applyFilters(panel)
  }));

  return (
    <div className='container'>
      <FilterSidebar filters={filters} setFilters={setFilters} options={data.filters} />
      <PanelGrid panels={panelsWithStatus} onPanelClick={setSelectedPanel} />
      {selectedPanel && <Modal panel={selectedPanel} onClose={() => setSelectedPanel(null)} />}
    </div>
  );
}

function PanelTile({ panel, onClick }) {
  return (
    <div className={`tile ${panel.active ? '' : 'inactive'}`} onClick={onClick}>
      <h3>{panel.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: panel.intro }} />
    </div>
  );
}

function PanelGrid({ panels, onPanelClick }) {
  return (
    <div className='grid'>
      {panels.map((panel, idx) => (
        <PanelTile key={idx} panel={panel} onClick={() => onPanelClick(panel)} />
      ))}
    </div>
  );
}

function Modal({ panel, onClose }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close-btn' onClick={onClose}>×</span>
        <h2>{panel.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: panel.description }} />
        <ul>
          {panel.properties.map((prop, idx) => (
            <li key={idx}><strong>{prop.key}:</strong> {prop.value}</li>
          ))}
        </ul>
        <a href={panel.link} target='_blank' rel='noopener noreferrer'>More Info</a>
      </div>
    </div>
  );
}

function FilterSidebar({ filters, setFilters, options }) {
  const handleChange = (code, value, type) => {
    setFilters(prev => {
      if (type === 'Multiple') {
        const current = prev[code] || [];
        const updated = current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value];
        return { ...prev, [code]: updated };
      } else {
        return { ...prev, [code]: [value] };
      }
    });
  };

  return (
    <div className='sidebar'>
      {options.map(filter => (
        <div key={filter.code}>
          <h4>{filter.title}</h4>
          {filter.options.map(opt => (
            <div key={opt.code}>
              <label>
                <input
                  type={filter.filterType === 'Multiple' ? 'checkbox' : 'radio'}
                  name={filter.code}
                  value={opt.code}
                  checked={(filters[filter.code] || []).includes(opt.code)}
                  onChange={() => handleChange(filter.code, opt.code, filter.filterType)}
                />
                {opt.title}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
