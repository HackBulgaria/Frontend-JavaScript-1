<div class="container">
  <hr>
    <div class="row row-margin-bottom">
    <div class="col-md-5 no-padding lib-item" data-category="view">
      <div class="lib-panel">
        <div class="row box-shadow">
           <div class="col-md-6">
             <a href="<%= user.html_url %>">
               <img class="lib-img-show" src="<%= user.avatar_url %>">
             </a>
           </div>
           <div class="col-md-6">
             <div class="lib-row lib-header">
               <h3><strong><%= user.type %></strong> <span><%= user.login %></span></h3>
               <div class="lib-header-seperator"></div>
             </div>
             <div class="lib-row lib-desc">
               Followers : <b><%= user.followers %></b><br>
               Following : <b><%= user.following %></b><br>
               Created at: <b><%= user.created_at %></b><br><br><br>
             </div>
           </div>
         </div>
        </div>
      </div>
      <div class="col-md-1"></div>
  </div>
</div>
