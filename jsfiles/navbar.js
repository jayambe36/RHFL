const template = document.createElement('template');
template.innerHTML = `
<header>
    <div class="nav">
      <div class="container">
        <div class="row">
          <div class="nav-items">
            <div class="logo">
              <img src="assets/images/logo.png">
            </div>
            <div class="menu-toggle">
              <div class="menu-hamburger"></div>
            </div>
            <div class="menu-items">
              <div class="menu">
                <ul>
                  <li><a href="index.html">HOME</a></li>
                  <li><a href="about-us.html">ABOUT US</a>
                  <ul>
                    <li><a href="who.html">WHO ARE WE</a></li>
                    <li><a href="#">OUR TEAM</a></li>
                    
                    <li><a href="#">FINANCIAL/LEGAL</a></li>
                  </ul></li>
                  <li><a href="services.html">PROGRAMMES</a>
                    
                    <ul class="dropover">
                      <li><a href="Program1.html">Emergency Medical Support</a></li>
                      <li><a href="Program3.html">Grace Food Bank</a></li>
                      <li><a href="Program9.html">Mission Smile Program</a></li>
                      <li><a href="Program7.html">Clubfoot Elimination Program</a></li>
                      <li><a href="Program4.html">Home for Homeless Program</a></li>
                      <li><a href="Program11.html">Mission Education Program</a></li>
                      <li><a href="Program8.html">Maternal and Child Health Program</a></li>
                      <li><a href="Program6.html">Health & Nutrition Program</a></li>
                      <li><a href="Women.html">Women Empowerment Program</a></li>
                      <li><a href="Program10.html">WASH</a></li>
                      <li><a href="Program2.html">Animal Welfare Program</a></li>
                      
                    </ul></li>
                    <li><a href="#">GET INVOLVED</a>
                      
                      <ul>
                        <li><a href="#">VOLUNTEERISM</a></li>
                        <li><a href="#">CARRIER</a></li>
                        <li><a href="#">IMPLEMENTATION PARTNERS</a></li>
                        <li><a href="#">CORPORATE</a></li>
                      </ul></li>
                  <li><a href="#">MEDIA</a>
                    
                  <ul>
                    <li><a href="blog.html">BLOG</a></li>
                    <li><a href="#">PHOTO/VIDEO</a></li>
                  </ul></li>
                  <li><a href="donate page.html">DONATE US</a></li>
                  <li><a href="contact-us.html">CONTACT US</a></li>
                </ul>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
`
document.body.appendChild(template.content);