import { Component, OnInit } from '@angular/core';
import { faSkype, faSlack, faAngular, faAirbnb, faAmazon, faAndroid, faSafari, faChrome, faEdge, faReact, faVuejs, faTeamspeak, faPage4, faPagelines, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faFileWord, faCode } from '@fortawesome/free-solid-svg-icons';
import { MaterialTableDialogComponent } from '../common/mat-components/material-table-dialog/material-table-dialog.component';

@Component({
    selector: 'ipad',
    templateUrl: './ipad.component.html',
    styleUrls: ['./ipad.component.scss']
})
export class IpadComponent implements OnInit {

    query: string = '';
    appIndexAfterFilter: number;


    data = {
        apps: [
            {
                id: 1,
                version: '',
                isActive: false,
                genre: 'social network',
                brand: faSlack
            },
            {
                id: 2,
                version: '89.0.1',
                isActive: false,
                genre: 'utilities',
                brand: faChrome
            },
            {
                id: 3,
                version: '90.0.1',
                isActive: false,
                genre: 'utilities',
                brand: faChrome
            },
            {
                id: 4,
                version: '91.0.1',
                isActive: false,
                genre: 'utilities',
                brand: faChrome
            },

            {
                id: 5,
                version: '',
                isActive: false,
                genre: 'productivity',
                brand: faAngular
            },

            {
                id: 6,
                version: '',
                isActive: false,
                genre: 'social network',
                brand: faSkype,
            },
            {
                id: 17,
                version: '',
                isActive: false,
                genre: 'social network',
                brand: faCode
            },

            {
                id: 18,
                version: '',
                isActive: false,
                genre: 'productivity',
                brand: faAmazon
            },

            {
                id: 9,
                version: '',
                isActive: false,
                genre: 'social network',
                brand: faAndroid,
            },
        ],
        folders: [
            {
                actions: {
                    isOpen: false,
                    isVisible: false
                },
                title: 'utilities',
                apps: [
                    {
                        id: 10,
                        version: '',
                        isActive: false,
                        genre: 'utilities',
                        brand: faSafari
                    },

                    {
                        id: 21,
                        version: '',
                        isActive: false,
                        genre: 'utilities',
                        brand: faChrome
                    },

                    {
                        id: 31,
                        version: '',
                        isActive: false,
                        genre: 'utilities',
                        brand: faEdge
                    },
                ]
            },
            {
                actions: {
                    isOpen: false,
                    isVisible: false
                },
                title: 'productivity',
                apps: [
                    {
                        id: 41,
                        version: '',
                        isActive: false,
                        genre: 'productivity',
                        brand: faReact
                    },

                    {
                        id: 51,
                        version: '',
                        isActive: false,
                        genre: 'productivity',
                        brand: faVuejs
                    }
                ]
            }
        ]
    }


    constructor(public dialog: MatDialog, private router: Router) { }

    openDialog() {
        const dialogRef = this.dialog.open(MaterialTableDialogComponent, {
            width: '100%',
            data: {
                columns: ['brand', 'model', 'year', 'site'],
                dataSource: [
                    {
                        id: '1',
                        brand: 'apple',
                        model: 'macbook pro',
                        year: '2021',
                        site: 'cupertino'
                    },
                    {
                        id: '2',
                        brand: 'apple',
                        model: 'imac',
                        year: '2009',
                        site: 'cupertino'
                    },
                    {
                        id: '3',
                        brand: 'hp',
                        model: 'nano',
                        year: '2012',
                        site: 'justice league'
                    },
                    {
                        id: '4',
                        brand: 'sony',
                        model: 'vaio',
                        year: '2021',
                        site: 'justice league'
                    },
                ]
            }
        });
        this.router.events
            .subscribe(() => {
                dialogRef.close();
            });
    }

    getCurrentIndex(app) {
        if (this.query.length > 2) {
            const current = this.data.apps.find(item => item.id === app.id);
            const index = this.data.apps.indexOf(current);
            this.appIndexAfterFilter = index;
        }
    }


    public showDropDown(current, e) {
        e.preventDefault();
        current.actions.isVisible = !current.actions.isVisible;
        if (!current.actions.isVisible) {
            current.actions.isOpen = false;
        }
    }

    public toggleDropDownList(folder) {
        folder.actions.isOpen = !folder.actions.isOpen;
    }

    public newFolder() {
        this.data.folders.push({
            apps: [],
            title: '',
            actions: { isOpen: false, isVisible: false }
        });
    }

    public removeFolder(current, index) {
        if (!current.apps.length) {
            this.data.folders.splice(index, 1);
        } else {
            current.apps.forEach(app => this.data.apps.push(app));
            this.data.folders.splice(index, 1);
        }
    }

    public drop(event: CdkDragDrop<string[]>, index?: number) {
        const counts = {};
        const strings = [];

        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            const previousIndex = this.appIndexAfterFilter ? this.appIndexAfterFilter : event.previousIndex;

            transferArrayItem(event.previousContainer.data,
                event.container.data,
                previousIndex,
                event.currentIndex);

            this.setFolderTitle(index, strings, counts);
            this.removeEmptyFolder(event);

        }
    }

    private setFolderTitle(index: number, strings: any[], counts: {}) {
        if (index) {
            const currentFolder = this.data.folders[index];
            if (currentFolder.apps.length <= 2) {
                currentFolder.title = currentFolder.apps[0].genre;
            }
            else {
                currentFolder.apps.forEach(app => strings.push(app.genre));
                const duplicates = this.findDuplicates(strings);
                duplicates.forEach((item) => {
                    counts[item] = (counts[item] || 0) + 1;
                });
                const title = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
                currentFolder.title = title;
            }
        }
    }

    private findDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) != index);
    }

    private removeEmptyFolder(event: CdkDragDrop<string[], string[]>) {
        if (!event.previousContainer.data.length) {
            const result = this.data.folders.find(item => item.apps.length == 0);
            const index = this.data.folders.indexOf(result);
            this.data.folders.splice(index, 1);
        }
    }

    ngOnInit(): void {
    }

}
