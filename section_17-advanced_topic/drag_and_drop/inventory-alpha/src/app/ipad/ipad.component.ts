import { Component, OnInit } from '@angular/core';
import { faSkype, faSlack, faAngular, faAirbnb, faAmazon, faAndroid, faSafari, faChrome, faEdge, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'ipad',
    templateUrl: './ipad.component.html',
    styleUrls: ['./ipad.component.scss']
})
export class IpadComponent implements OnInit {
    isActive = false;
    folderSelected = [];
    // onInit prePopulated
    data = {
        apps: [
            {
                isActive: false,
                genre: 'social netwoking',
                brand: faSlack
            },

            {
                isActive: false,
                genre: 'productivity',
                brand: faAngular
            },

            {
                isActive: false,
                genre: 'social netwoking',
                brand: faSkype,
            },
            {
                isActive: false,
                genre: 'social netwoking',
                brand: faAirbnb
            },

            {
                isActive: false,
                genre: 'productivity',
                brand: faAmazon
            },

            {
                isActive: false,
                genre: 'social netwoking',
                brand: faAndroid,
            },
        ],
        folders: [
            [
                {
                    isActive: false,
                    genre: 'utilities',
                    brand: faSafari
                },

                {
                    isActive: false,
                    genre: 'utilities',
                    brand: faChrome
                },

                {
                    isActive: false,
                    genre: 'utilities',
                    brand: faEdge
                },

            ],
            [
                {
                    isActive: false,
                    genre: 'productivity',
                    brand: faReact
                },

                {
                    isActive: false,
                    genre: 'productivity',
                    brand: faVuejs
                }
            ],
        ]
    }

    // _________________________________not folder yet_________________________________

    constructor() { }

    appSelect(current) {
        current.isActive = !current.isActive;
        this.isActive = current.isActive;
    }

    selectedFolderIndex;

    folderSelect(e, index) {
        this.selectedFolderIndex = index === this.selectedFolderIndex ? null : index; 
        this.folderSelected = this.data.folders[index];
    }

    saveChange() {
        // push item into preexisted folder.
        this.data.apps.forEach((item) => {
            if (item.isActive) {
                this.folderSelected.push(item);
            }
        });
        // cleaning selected apps from the shelf.
        this.data.apps = this.data.apps.filter(item => !item.isActive);
        // removing class 'selected' from both folder and apps.
        // this.removeClass('folder', 'selected');
        this.folderSelected.forEach(item => item.isActive = false);
    }

    folderCreate() {
        const result = this.data.apps.filter(item => item.isActive);
        this.data.folders.push(result);
        // cleaning selected apps from the shelf.
        this.data.apps = this.data.apps.filter(item => !item.isActive);
        this.data.folders.forEach((folder) => {
            folder.forEach(app => app.isActive = false);
        });
    }

    removeAppFromFolder() {
        const filtered = [];
        this.data.folders.forEach((folder) => {
            const result = folder.filter(app => !app.isActive);
            filtered.push(result);
            folder.forEach((app) => {
                if (app.isActive) {
                    this.data.apps.push(app);
                }
            })
        });
        this.data.folders = filtered;
        // removing class 'selected' from apps.
        this.data.apps.forEach(item => item.isActive = false);

    }

    ngOnInit(): void {
    }

}
