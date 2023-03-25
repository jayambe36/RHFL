//footer for home pg, contact us pg, donate pg
const template = document.createElement('template');
template.innerHTML = `
<footer>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="footer-content">
          <h2>OUR LOCATION</h2>
          <p>H.No.4453 Sathe Nagar Near Manoj Kirana Store Narpoli Bhiwandi Thane Maharashtra-421305</p><br>
          <p>Registration No.U85300MH2021NPL368070</p><br>
          <p>PAN NO. AALCR3060M</p>
          <ul>
            <li><a style="color: black" href="https://www.facebook.com/rhlfofficial/"><i class="fab fa-facebook-f"></a></i></li>
            <li><a style="color: black" href="https://twitter.com/rhlfofficial"><i class="fab fa-twitter"></a></i></li>
            <li><a style="color: black" href="https://youtube.com/channel/UCPGUOZUxESUOLNaTjeElSWQ"><i class="fab fa-youtube"></a></i></li>
            <li><a href="https://www.linkedin.com/company/rhlfofficial/"><i style="color: black" class="fab fa-linkedin"></a></i></li>
            <li><a style="color: black" href="https://www.instagram.com/rhlfofficial/"><i class="fab fa-instagram"></a></i></li>
          </ul>
        </div>
      </div>
    <div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="footer-content">
          <h2>Quick Links</h2>
          <ol>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>Privacy Policy</a></li>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>Term and Condition</a></li>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>Refund Policy</a></li>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>Child Protection Policy</a></li>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>POSH Policy</a></li>
          </ol>
        </div>
      </div>
     <!--- <div class="col-lg-3 col-md-3 col-sm-6 col-6">
        <div class="footer-content">
          <h2>Services</h2>
          <ol>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>Home</a></li>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>About Us</a></li>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>Services</a></li>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>Blog</a></li>
            <li><a href="#"><i class="fal fa-angle-double-right"></i>Contact Us</a></li>
          </ol>
        </div>
      </div>---->
      <div class="col-lg-4 col-md-4 col-sm-6 col-6">
        <div class="footer-content">
          <h2>Subscribe for NEWSLETTER</h2>
            <p>Stay Informed about Currently Running Campaigns, Events, Opportunities with Real Happiness Of Life Foundation</p>
          <div class="form-group">
            <input class="form-control" role="" name="email" type="email" placeholder="Enter Your Email">
            <i class="fal fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="copy-right">
    <div class="container">
      <div class="copy-right-card">
       <p>2022 @ All Rights Reserved Designed and developed by<a
        href="https://www.ggmt.org">GGMT</a></p>
      </div>
    </div>
  </div>
</footer>
  `
document.body.appendChild(template.content);