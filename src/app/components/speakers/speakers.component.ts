import { Component, OnInit } from "@angular/core";

import { Speaker } from "./speaker.model";

@Component({
  selector: "app-speakers",
  templateUrl: "./speakers.component.html",
  styleUrls: ["./speakers.component.css"]
})
export class SpeakersComponent implements OnInit {
  speakers = [
    new Speaker(
      "Nishu Goel",
      "IBM",
      "DcoustaWilson",
      "nishugoel",
      "nishugoel.jpeg",
      "nishugoel.webp",
      ""
    ),
    new Speaker(
      "Pankaj Parkar", 
      "Synerzip", 
      "", 
      "", 
      "pankajparkar.jpg", 
      "pankajparkar.webp", 
      ""
      ),
    new Speaker(
      "Anchal Bhandari",
      "PTC",
      "",
      "",
      "anchal.jpg",
      "anchal.webp",
      "Anchal is an IoT Solution Consultant working for one of the leaders in this technology Parameteric Technology Corporation. She has worked on applications integrating IoT and angular and that has been her core area of interest. She has been working in web-developement past few years developing chatbots, multi-lingual platform and micro-services. Being higly passinate about angular she writes about angular on her website https:anchal.me."
    ),
    new Speaker(
      "Santosh Yadav",
      "Deutsch",
      "",
      "",
      "santoshyadav.jpg",
      "santoshyadav.webp",
      "Santosh has more than 10 years of experience in IT, he is working with Deutsch Bank as Full Stack Developer. He is also an active open source contributor and has contributed to NgRx and Angular and many other open source projects. He is also the organizer of Pune Tech Meetup and MEAN stack trainer"
    ),
    new Speaker(
      "Srashti Jain",
      "Hvantage Technologies",
      "srashtisj",
      "",
      "srashti.jpg",
      "srashti.webp",
      "I have 4+ years of IT experience and worked on various technologies like .NET, Angular, Microsoft Azure and Power BI Always up for sharing knowledge and learning from others"
    ),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", ""),
    new Speaker("TBD", "TBD", "", "", "speaker-default.jpg","speaker-default.webp", "")
  ];
  constructor() {}

  ngOnInit() {}
}
