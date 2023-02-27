import { Component, OnInit } from '@angular/core';
import { faSkype, faSlack, faAngular, faAirbnb, faAmazon, faAndroid, faSafari, faChrome, faEdge, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { CdkDragDrop, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
    selector: 'ipad',
    templateUrl: './ipad.component.html',
    styleUrls: ['./ipad.component.scss']
})
export class IpadComponent implements OnInit {
    folderSelected;
    folderSelectedIndex;
    hoverApp: any;
    currentApp;
    // onInit prePopulated
    data = {
        apps: [
            {
                isActive: false,
                genre: 'social network',
                brand: faSlack
            },

            {
                isActive: false,
                genre: 'productivity',
                brand: faAngular
            },

            {
                isActive: false,
                genre: 'social network',
                brand: faSkype,
            },
            {
                isActive: false,
                genre: 'social network',
                brand: faAirbnb
            },

            {
                isActive: false,
                genre: 'productivity',
                brand: faAmazon
            },

            {
                isActive: false,
                genre: 'social network',
                brand: faAndroid,
            },
        ],
        folders: [
            // {
            //     title: '',
            //     apps: [
            //         {
            //             isActive: false,
            //             genre: 'utilities',
            //             brand: faSafari
            //         },

            //         {
            //             isActive: false,
            //             genre: 'utilities',
            //             brand: faChrome
            //         },

            //         {
            //             isActive: false,
            //             genre: 'utilities',
            //             brand: faEdge
            //         },
            //     ]
            // },
            // {
            //     title: '',
            //     apps: [
            //         {
            //             isActive: false,
            //             genre: 'productivity',
            //             brand: faReact
            //         },

            //         {
            //             isActive: false,
            //             genre: 'productivity',
            //             brand: faVuejs
            //         }
            //     ]
            // }
        ]
    }

    constructor() { }

    appSelect(e: CdkDragStart, app) {
        console.log('app', app);
        this.currentApp = app;
    }

    setCurrentItem(app) {
        this.hoverApp = app;
    }

    unSetCurrentItem() {
        this.hoverApp = null;
    }

    drop(e) {
        if (this.hoverApp) {
            this.folderCreate(this.hoverApp, this.currentApp)
        }
    }

    folderSelect(index) {
        this.folderSelectedIndex = index === this.folderSelectedIndex ? null : index;
        this.folderSelected = this.data.folders[index];
    }

    saveChange() {
        // // push item into preexisted folder.
        // this.data.apps.forEach((item) => {
        //     if (item.isActive) {
        //         this.folderSelected.push(item);
        //     }    
        // });
        // // cleaning selected apps from the shelf.
        // this.data.apps = this.data.apps.filter(item => !item.isActive);
        // // removing class 'selected' from both folder and apps.
        // // this.removeClass('folder', 'selected');
        // this.folderSelected.forEach(item => item.isActive = false);
    }

    findDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) != index);
    }

    folderCreate(app1, app2) {
        const counts = {};
        const strings = [];
        const folderNew = { title: '', apps: [app1, app2] };


        // if (result.length <= 2) {
        //     folderNew.title = result[0].genre;
        // } else {
        //     folderNew.apps.forEach((item) => {
        //         strings.push(item.genre)
        //     });

        //     const duplicates = this.findDuplicates(strings);
        //     duplicates.forEach((item) => {
        //         counts[item] = (counts[item] || 0) + 1;
        //     });

        //     const title = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        //     folderNew.title = title;
        // };

        this.data.folders.push(folderNew);
        // cleaning selected apps from the shelf.
        // this.data.apps = this.data.apps.filter(item => !item.isActive);
        // this.data.folders.forEach((folder) => {
        //     folder.apps.forEach((app) => {
        //         app.isActive = false;
        //     });
        // })
    }

    removeAppFromFolder() {
        // const filtered = [];
        // this.data.folders.forEach((folder) => {
        //     const result = folder.filter(app => !app.isActive);
        //     filtered.push(result);
        //     folder.forEach((app) => {
        //         if (app.isActive) {
        //             this.data.apps.push(app);
        //         }
        //     })
        // });
        // this.data.folders = filtered;
        // // removing class 'selected' from apps.
        // this.data.apps.forEach(item => item.isActive = false);

    }

    ngOnInit(): void {
    }

}
