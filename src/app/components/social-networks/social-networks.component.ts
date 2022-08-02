import { Component, OnInit } from '@angular/core';
import { NetworsService } from 'src/app/services/networs.service';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {

  linkYoutube = ''
  linkFacebook = ''
  linkInstagram = ''

  constructor(private networkservice :NetworsService) { }

  ngOnInit(): void {
    this.networkservice.getNetworsLinks().subscribe(links =>{
      this.linkYoutube = links[0].link
      this.linkInstagram = links[1].link
      this.linkFacebook = links[2].link
    })
  }

}
