<template>
  <div class="feedback-wrapper">

<div class="feedback-body">
  <div class="title">
    <hr>
    <span>םיכמסמ</span>
  </div>
  <div class="head-wrapper">
  <div class="feedback-head"></div>
  <feedback-element
    class="post-item"
    v-for="post in posts" :key="post.id"
    v-bind="post">
  </feedback-element>
  </div>
</div>
  </div>
</template>

<script>
import FeedbackElement from './FeedbackElement'
  export default {
     data(){
       return {
         posts: [
           {id: 1, title: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש',img: '/static/images/profile/profileImg.png',date:'30.07.2019', rate: 10, description: '.רדתסמ הזש יתמ םייסמ אוהו חותפ הז םימעפל ,חיטבמש ןמזב םייסל לדתשמ אוה שארמ ןמז לע םימכסמ ונחנא םא ,טקייורפה תא ותיא להנמ ינא ךיא יולת הז םינמז תניחבמ ,הרומתה תא הוושו םלתשמ ,ריבס ולש ריחמה' + '.הדובעה תוכיאמו לבקמ ינאש האצותהמ הצורמ דואמ ינא ,הלועמ הרוצב תודובעה לכ תא השועו לכהב קסעתמ אוה לבא ךמסומ יאלמשח אוה ,לכה תושעל עדוי אוה .תומוק עברא לש ספאמ היינב ונל השע ןויצ'},
           {id: 2, title: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש',img: '/static/images/profile/pexels-photo-736716.jpeg',date:'30.07.2019', rate: 7, description: '.רדתסמ הזש יתמ םייסמ אוהו חותפ הז םימעפל ,חיטבמש ןמזב םייסל לדתשמ אוה שארמ ןמז לע םימכסמ ונחנא םא ,טקייורפה תא ותיא להנמ ינא ךיא יולת הז םינמז תניחבמ ,הרומתה תא הוושו םלתשמ ,ריבס ולש ריחמה' + '.הדובעה תוכיאמו לבקמ ינאש האצותהמ הצורמ דואמ ינא ,הלועמ הרוצב תודובעה לכ תא השועו לכהב קסעתמ אוה לבא ךמסומ יאלמשח אוה ,לכה תושעל עדוי אוה .תומוק עברא לש ספאמ היינב ונל השע ןויצ'},
           {id: 3, title: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש',img: '/static/images/profile/pexels-photo-736716.jpeg',date:'30.07.2019', rate: 4, description: '.רדתסמ הזש יתמ םייסמ אוהו חותפ הז םימעפל ,חיטבמש ןמזב םייסל לדתשמ אוה שארמ ןמז לע םימכסמ ונחנא םא ,טקייורפה תא ותיא להנמ ינא ךיא יולת הז םינמז תניחבמ ,הרומתה תא הוושו םלתשמ ,ריבס ולש ריחמה' + '.הדובעה תוכיאמו לבקמ ינאש האצותהמ הצורמ דואמ ינא ,הלועמ הרוצב תודובעה לכ תא השועו לכהב קסעתמ אוה לבא ךמסומ יאלמשח אוה ,לכה תושעל עדוי אוה .תומוק עברא לש ספאמ היינב ונל השע ןויצ'},
             ]
       };
     },
    components: {
      FeedbackElement,
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.feedback-wrapper{
  margin: 0 auto;
  width: 1449px;
  .title{
    color: #333333;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right: 80px;
    hr{
      margin-top:38px;
      margin-right: 10px;
      border: 1px solid #333333;
      transform: rotate(180deg);
      width: 260px;
      height: 0px;
    }
    span{
      font-weight: bold;
      font-size: 48px;
      color: #333333;
    }
  }
  .head-wrapper{
    margin:  0 auto;
    height: 978px;
    overflow: hidden;
    width: 1250px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    .feedback-head{

      background-color: #64B049;
      width: 100%;
      height: 4px;
    }
  }

}
.feedback-body{

}
</style>