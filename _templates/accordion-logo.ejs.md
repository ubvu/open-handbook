```{=html}
<div id="accordionlist list" class="accordion list">
    <% let i=0 %>
        <% for (const item of items) { %>
            <div class="accordion-item vu-listing-item" <%=metadataAttrs(item) %>>
                <span class="accordion-header" id="heading<%= i %>">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse<%= i %>" aria-expanded="false" aria-controls="collapse<%= i %>">
                        <span class="listing-title"><%= item.title %></span>
                    </button>
                </span>
                <div id="collapse<%= i %>" class="accordion-collapse collapse show" aria-labelledby="heading<%= i %>">
                    <div class="accordion-body pt-0">
                                <% if(item.categories) { %>
                                    <div class="listing-categories">
                                        <% for (const cat of item.categories) { %>
                                            <div class="listing-category">
                                                <a href="#category=<%= encodeURIComponent(cat) %>" aria-label="Filter by category">
                                                    <%= cat %>
                                                </a>
                                            </div>
                                        <% } %>
                                    </div>
                                <% } %>
                        <div class="grid">
                            <div class="g-col-12 g-col-sm-9">                        
                                <a href="<%- item.path %>" aria-label="Go to tool">
                                    <div>
                                        <span class="listing-description"><%= item.description %></span><br>
                                    </div>
                                </a>
                            </div>
                            <div class="g-col-12 g-col-sm-3">
                                <div class="listing-image "><a href="<%- item.path %>" aria-label="Go to tool"><img src="<%= item.image %>" style="max-width:100%" alt="<%= item.title %> logo"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <% i++ %>
        <% } %>
</div>
```