var app = new Vue (
  {
    el:'#root',
    data: {
      index: 0,
      imgSrc: [
        'https://www.changethefuture.it/assets/uploads/2020/05/animali-selvatici.jpg',
        'https://www.larepubblicadeglianimali.com/wordpress/wp-content/uploads/2019/08/incendi-amazzonia-conseguenze-animali-la-repubblica-degli-animali-805x527.jpg',
        'https://images2.corriereobjects.it/methode_image/2020/11/27/Scienze/Foto%20Scienze%20-%20Trattate/31.0.759478395-0005-k0QH-U322020628087643aH-656x492@Corriere-Web-Sezioni.jpg?v=20201127134756',
      ]
    },
    methods: {
      next: function () {
        if (this.index < this.imgSrc.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }
      },
      prev: function () {
        if (this.index < this.imgSrc.length - 1) {
          this.index--;
        } else {
          this.index = 2;
        }

      }
    }
  }
);
