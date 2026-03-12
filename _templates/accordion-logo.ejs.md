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
                                        <a href="#category=<%= encodeURIComponent(cat) %>">
                                            <%= cat %>
                                        </a>
                                    </div>
                                <% } %>
                            </div>
                        <% } %>
                        <div class="row">
                            <div class="column" style="width: 68%;">
                                <a href="<%- item.path %>">
                                    <span class="listing-description"><%= item.description %></span><br>
                                </a>
                            </div>
                            <div class="column" style="width: 30%;">
                                <div class="listing-image "><a href="<%- item.path %>"><img src="<%= item.image %>" style="max-width: 200px; max-height: 150px;"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <% i++ %>
        <% } %>
</div>
```