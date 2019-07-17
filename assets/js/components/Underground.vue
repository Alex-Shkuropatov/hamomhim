<template>
  <footer>
    <div class="footer-container h-container">

      <div class="logo-col">
        <div class="logo-wrap">
          <img src="/static/images/logo/logo-blue.png" alt="">
        </div>
        <div class="copyright1">2019 םיחמומה תצובקל תורומש תויוכזה לכ</div>
        <div class="copyright2">רתאה ןונקת שומישה יאנת</div>
        <a href="" class="th-btn th-brn-blue th-btn-md">םימושר תוחוקלל הסינכ</a>
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
        <div>
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
          <p>אריאל שרון 4</p>
          <span class="caption">גבעתיים, ישראל</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

@import '~@/vars.scss';

.logo-wrap{
  img{
    width: 275px;
  }
}

</style>
