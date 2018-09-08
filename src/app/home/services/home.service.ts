import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { conf } from '../../helper';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  headers: any;
  constructor(private http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders().set('NG-AUTH', '12NQ1A0542')
    }
  }
  getData(uri: string) {
    return this.http.get(conf.api + uri, this.headers);
  }
  getHomePosts() {
    //this.http.get('API URL');
  let p= [
     
      {
        "category_title": 'Regional News',
        "category_posts": [
          {
            "news_title":"అవయవదానానికి ముందుకొచ్చిన చంద్రబాబు",
            "news_image": "http://www.eenadu.net/04273906BRK117-NCBN.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"అక్రమ మైనింగ్‌ ఇకనైనా ఆపాలి: పవన్‌",
            "news_image": "http://www.eenadu.net/02025706BRK99A.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"మంత్రి భర్త దోషి అని తేలితే వదిలేది లేదు",
            "news_image": "http://www.eenadu.net/0316456BRK-NITISH.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"దుర్గగుడిలో చీర మాయంపై సందిగ్ధత",
            "news_image": "http://www.eenadu.net/11283306BRK74A.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          }
        ]
      },
      {
        "category_title": 'Political News',
        "category_posts": [
          {
            "news_title":"అవయవదానానికి ముందుకొచ్చిన చంద్రబాబు",
            "news_image": "http://www.eenadu.net/04273906BRK117-NCBN.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"అక్రమ మైనింగ్‌ ఇకనైనా ఆపాలి: పవన్‌",
            "news_image": "http://www.eenadu.net/02025706BRK99A.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"మంత్రి భర్త దోషి అని తేలితే వదిలేది లేదు",
            "news_image": "http://www.eenadu.net/0316456BRK-NITISH.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"దుర్గగుడిలో చీర మాయంపై సందిగ్ధత",
            "news_image": "http://www.eenadu.net/11283306BRK74A.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          }
        ]
      },
      {
        "category_title": 'Andhrapradesh News',
        "category_posts": [
          {
            "news_title":"అవయవదానానికి ముందుకొచ్చిన చంద్రబాబు",
            "news_image": "http://www.eenadu.net/04273906BRK117-NCBN.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"అక్రమ మైనింగ్‌ ఇకనైనా ఆపాలి: పవన్‌",
            "news_image": "http://www.eenadu.net/02025706BRK99A.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"మంత్రి భర్త దోషి అని తేలితే వదిలేది లేదు",
            "news_image": "http://www.eenadu.net/0316456BRK-NITISH.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          },
          {
            "news_title":"దుర్గగుడిలో చీర మాయంపై సందిగ్ధత",
            "news_image": "http://www.eenadu.net/11283306BRK74A.JPG",
            "created_on" :"22-01-1995",
            "posted_by" : 'admin',
          }
        ]
      },
      
      
    ];
    return p;

  }
  getHomeArticle(){
   let a = 
    
      {
        "news_title":"తన సామాజిక వర్గానికే ప్రాధాన్యత ఇచ్చిన చంద్రబాబు..!",
        "news_image":"http://www.pslvtv.com/admin/gallery/1532160818_chandra.JPG",
        "news_description":"తమకు తక్కువ సమయాన్ని కేటాయించారని  చెప్పి ఉన్న సమయం కూడా సద్వినియోగం చేయకుండా సినిమా ప్రస్తావన తో ప్రక్కదారి పట్టించారు. టిడిపి కి లోకసభలో ఫ్లోర్ లీడర్ గా ఉన్న తోట నరసింహులు కి అవిశ్వాసం ప్రవేశపెట్టే అవకాశం కల్పించకుండా చంద్రబాబు కేశినేని నాని కి అవకాశం కల్పించడం ,అలాగే అవిశ్వాసం పై మాట్లాడే అవకాశం గల్లా జయదేవ్ కి కల్పించటం వివాస్పదం గా మారింది.తన సామాజికవర్గం వారి కి ప్రాముఖ్యత కల్పించి ఇతర సామాజిక వర్గాలకు అవకాశం కల్పించడంలేదు అని తెలుగు తమ్ముల్లే  బావిస్తున్నారు."
      }
      return a;
    
  }
  
  getCategoryPosts(){
   let c = [
      {
        "news_titile" : "చంద్రబాబు సమర్థుడే.. కానీ..: ఎంపీ గంగరాజు",
        "news_postedon" : "22-01-1995 ",
        "news_postedby" : "gopinadh",
        "news_image" : "http://cdn3.andhrajyothy.com/AJNewsImages//2018//Aug//20180806//Hyderabad//636691555008968043.jpg",
        "news_description" : " ‘ముఖ్యమంత్రి చంద్రబాబు చాలా సమర్ధుడే.. రాష్ట్రానికి గొప్ప వ్యక్తి కూడా.. కానీ ఒక సాధారణ  తెల్లారిన దగ్గర నుంచి బీజేపీ ప్రభుత్వంపై తెలుగుదేశం నాయకులు ఒక దండకంలా విమర్శలు చేయడం న్యాయం కాదు. దీనిని విశ్వాస ఘాతుకం అంటారు’",
        "path" : "/"
       },
       {
        "news_titile" : "‘బాలయ్య మెజార్టీ తగ్గితే హిందూపురం వదిలివెళ్లిపోతాం’",
        "news_postedon" : "22-01-1995 ",
        "news_postedby" : "gopinadh",
        "news_image" : "http://cdn3.andhrajyothy.com/AJNewsImages//2018//Aug//20180806//Hyderabad//636691586623359114.jpg",
        "news_description" : "  గత ఎన్నికల్లో హిందూపురం పట్టణంలో ఎమ్మెల్యే నందమూరి బాలకృష్ణకు వచ్చిన మెజార్టీ కంటే రాబోయే ఎన్నికల్లో తగ్గితే హిందూపురం వదులుతామని టీడీపీ నాయకులు నాగరాజు అన్నారు.",
        "path" : "/"
       },
       {
        "news_titile" : "‘ఇంధన పొదుపులో ఏపీ టాప్‌’",
        "news_postedon" : "22-01-1995 ",
        "news_postedby" : "gopinadh",
        "news_image" : "http://cdn3.andhrajyothy.com/AJNewsImages//2018//Aug//20180806//Hyderabad//636691586623359114.jpg",
        "news_description" : " ఇంధన పొదుపులో ఆంధ్రప్రదేశ్‌ మరోసారి జాతీయ స్థాయిలో సత్తాచాటింది. కేంద్ర విద్యుత్‌ శాఖ తొలిసారిగా విడుదల చేసిన రాష్ట్ర ఇంధన పొదుపు సన్నద్ధత సూచీలో ఏపీ అగ్రస్థానంలో నిలిచింది.",
        "path" : "/"
       }
    ]
    return c;
  }
  getSidePosts(){
    let p = [
      {
        "news_title" : "MK Stalin pens emotional letter to 'Appa' Karunanidhi",
        "news_image" : "https://img.timesnownews.com/story/1533698149-stalin_twitter.jpg?d=100x75",
        "created_on" : "08-08-2016",
        "posted_by" : "Gopinadh",
        "path" : "/"
      },
      {
        "news_title" : "Know Karunanidhi's family tree & Kalaignar's political heirs",
        "news_image" : "https://img.timesnownews.com/story/1533657161-KSS.jpg?d=100x75",
        "created_on" : "08-08-2016",
        "posted_by" : "Gopinadh",
        "path" : "/"
      },
      {
        "news_title" : "Muthuvel ‘Kalaignar’ Karunanidhi – A writer extraordinaire ",
        "news_image" : "https://img.timesnownews.com/story/1533682053-Muthu.jpg?d=100x75",
        "created_on" : "08-08-2016",
        "posted_by" : "Gopinadh",
        "path" : "/"
      },
      {
        "news_title" : "What your horoscope for August 8 says",
        "news_image" : "https://img.timesnownews.com/story/1533129230-love_horoscope.jpg?d=100x75",
        "created_on" : "08-08-2016",
        "posted_by" : "Gopinadh",
        "path" : "/"
      },
      {
        "news_title" : "Know Karunanidhi's family tree & Kalaignar's political heirs",
        "news_image" : "https://img.timesnownews.com/story/1533652771-mk_rajini.jpg?d=100x75",
        "created_on" : "08-08-2016",
        "posted_by" : "Gopinadh",
        "path" : "/"
      }
    ]
    return p;
  }
}
