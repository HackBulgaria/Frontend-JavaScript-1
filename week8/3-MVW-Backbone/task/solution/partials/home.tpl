<input type="text" id="user-input">
<button class="btn btn-primary" id="add-btn">Add</button>

<ul>
<% _.each(users, function (user, idx) { %>
  <li>
    <a href="#/user/<%= user.login %>">
      <%= user.login %>
    </a>
    <a href="javascript:void(0)"
      class="delete-btn"
      data-index="<%= idx %>">[X]</a>
  </li>
<% }); %>
</ul>
