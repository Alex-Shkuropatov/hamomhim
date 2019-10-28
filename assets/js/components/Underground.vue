<template>
  <footer>
    <div class="footer-container h-container">

      <div class="logo-col">
        <div class="logo-wrap">
          <img src="/static/images/logo/logo-blue.png" alt="">
        </div>
        <div class="copyright1">כל הזכויות שמורות לקבוצת המומחים 2019</div>
        <div class="copyright2"><router-link class="hover-link" :to="{ name: 'terms-and-conditions'}">תקנון האתר</router-link>   <router-link  class="hover-link" :to="{ name: 'privacy-policy'}">תנאי השימוש</router-link></div>
        <div class="copyright2">
          <div class="social-links">
            <a href="#" class="instagram-wrap">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="youtube-wrap">
              <i class="fab fa-youtube"></i>
            </a>
            <a  target="_blank" href="https://m.facebook.com/%D7%A7%D7%91%D7%95%D7%A6%D7%AA-%D7%94%D7%9E%D7%95%D7%9E%D7%97%D7%99%D7%9D-%D7%9C%D7%90%D7%93%D7%A8%D7%99%D7%9B%D7%9C%D7%99%D7%9D-388668638352447/" class="facebook-wrap">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>

        </div>
        <div class="wrapper-a">
        <button v-if="logged" @click="openLogin" class="th-btn th-btn-blue th-btn-md button">כניסה ללקוחות רשומים</button>
        </div>
      </div>

      <div class="footer-col areas-col">
    		<p class="col-caption">איזורים</p>
    		<ul>
          <li><a href="/?area=כל הארץ">כל הארץ</a></li>
          <li><a href="/?area=תל אביב">תל אביב</a></li>
          <li><a href="/?area=חיפה והסביבה">חיפה והסביבה</a></li>
          <li><a href="/?area=השרון והסביבה">השרון והסביבה</a></li>
          <li><a href="/?area=באר שבע">באר שבע</a></li>
    		</ul>
  		</div>

      <div class="footer-col services-cats">
        <p class="col-caption">סוגי שירות</p>
        <div class="two-cols">
          <ul>
            <li><a href="/?category=638">קבלן שלד</a></li>
            <li><a href="/?category=639">שיפוצים</a></li>
            <li><a href="/?category=640">יועצים</a></li>
            <li><a href="/?category=641">חשמלאים</a></li>
            <li><a href="/?category=642">מסגרים</a></li>
            <li><a href="/?category=643">מיזוג אויר</a></li>
            <li><a href="/?category=644">מנדפים</a></li>
          </ul>
          <ul>
            <li><a href="/?category=645">נרוסטה</a></li>
            <li><a href="/?category=646">תאורה</a></li>
            <li><a href="/?category=647">אפוקסי</a></li>
            <li><a href="/?category=648">זכוכית</a></li>
            <li><a href="/?category=649">שיש</a></li>
            <li><a href="/?category=650">אלומיניום</a></li>
            <li><a href="/?category=651">מעקות</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-col contact-col">
        <p class="col-caption">צור קשר</p>
        <div class="contact-item">
          <a href="tel:0587000873">0723902704</a>
          <span class="caption">טלפון המשרד</span>
        </div>
        <div class="contact-item">
          <a href="mailto:hamomhiminfo@gmail.com">hamomhiminfo@gmail.com</a>
          <span class="caption">מייל ליצירת קשר</span>
        </div>
        <div class="contact-item">
          <p>הברזל 31</p>
          <span class="caption">תל אביב, ישראל</span>
        </div>
      </div>

    </div>
    <div class="footer-endline"></div>
  </footer>
</template>

<script>
export default {
  methods:{
    openLogin(e){
      e.preventDefault();
      this.$store.commit('modals/login/open');
    },
  },
  computed:{
    logged(){
      this.$store.getters['user/isLogged']
    }
  }
}
</script>

<style lang="scss" scoped>

@import '~@/vars.scss';
footer{
  margin-top: auto;
}
.footer-container{
  border-top: ceil($scale1 * 4px) solid #F2F2F2;
  padding-top: ceil($scale1 * 40px);
  display: flex;
  justify-content: space-between;
}
.logo-wrap{
  margin-bottom: ceil($scale1 * 20px);
  img{
    width: ceil($scale1 * 275px);
  }
}
.logo-col{
  flex-grow: 2;
}
.footer-col{
  flex-grow: 1;
  a{
    color: $clr-dark;
    text-decoration: none;
  }
  p{
    margin: 0;
  }
}
.copyright1,
.copyright2{
  margin-bottom: ceil($scale1 * 10px);
  .hover-link{
    color: #4F4F4F;
    font-weight: bold;
    &:hover{
      color: #2871D7;
    }
  }
  .social-links{
    display: flex;
    flex-direction: row;
    align-items: center;
    a{
      font-size: 25px;

      @media screen and (max-width: 480px) {
        font-size: 20px;
      }
    }
    .youtube-wrap{
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
.col-caption{
  margin-bottom: ceil($scale1 * 16px);
}
.copyright1,
.copyright2,
.col-caption{
  font-size: ceil($scale1 * 24px);
  font-weight: bold;
}

.services-cats .two-cols{
  display: flex;
  ul{
    margin: 0;
  }
  ul:first-child{
    margin-left: ceil($scale1 * 19px);
  }
}

.contact-col .contact-item{
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: ceil($scale1 * 24px);
  p, a{
    font-weight: bold;
  }
}

.footer-endline{
  height: ceil($scale1 * 21px);
  background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  margin-top: ceil($scale1 * 50px);
  //margin-bottom: 300px;
}

@media(max-width: $breakpoint3){
  .footer-container{
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .services-cats,
  .areas-col{
    order: -2;
    width: 50%;
    margin-bottom: 20px;
  }
}

@media (max-width: $breakpoint4){
  .contact-col{
    //order: -1;
    //margin-bottom: 20px;
  }
  .logo-col{
    //width: 100%;
  }
  .copyright1,
  .copyright2,
  .col-caption{
    font-size: ceil($scale2 * 24px);
    font-weight: bold;
  }
  .contact-col .contact-item{
    font-size: ceil($scale2 * 24px);
  }
}

@media(max-width: $breakpoint5){
  .logo-col{
    margin-bottom: 10px;
  }
}

</style>
