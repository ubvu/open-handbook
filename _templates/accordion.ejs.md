```{=html}
<div id="accordionlist list" class="accordion list">
    <% let i=0 %>
    <% for (const item of items) { %>
        <div class="accordion-item vu-listing-item" <%=metadataAttrs(item) %>>
            <span class="accordion-header" id="heading<%= i %>">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse<%= i %>" aria-expanded="false" aria-controls="collapse<%= i %>">
                    <span class="listing-title"><%= item.title %></span>
                </button>
            </span>
            <div id="collapse<%= i %>" class="accordion-collapse collapse" aria-labelledby="heading<%= i %>">
                <div class="accordion-body pt-0">
                    <% if(item.categories) { %>
                        <div class="listing-categories">
                            <% for (const cat of item.categories) { %>
                                <div class="listing-category">
                                    <a href="#category=<%= encodeURIComponent(cat) %>">
                                        <%= cat %>
                                    </a>
                                </div>
                            <% } %>
                        </div>
                    <% } %>
                    <a href="<%- item.path %>">
                        <div>
                            <span class="listing-description"><%= item.description %></span><br>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <% i++ %>
    <% } %>
</div>
```