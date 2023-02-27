import { Component, OnInit } from '@angular/core';
import { faLaptop, faTv, faHdd, faHeadset, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    cards = [
        {
            id: 1,
            btnLabel: 'overview',
            title: 'macOSMojave',
            subTitle: 'Version 10.14.6',
            isOpen: false,
            className: 'col-md-6 col-lg-4',
            icon: faLaptop,
            details: [
                {
                    label: 'model',
                    value: 'MacBook Pro (Retina, 15-inch, Mid 2014)'
                },
                {
                    label: 'processor',
                    value: '2.2 GHz Intel Core i7'
                },
                {
                    label: 'memory',
                    value: '16 GB 1600 MHz DDR3'
                },
                {
                    label: 'graphics',
                    value: 'Intel Iris Pro 1536 MB'
                },
                {
                    label: 'serial number',
                    value: 'C02PD7M7G3QC'
                },
            ]
        },
        {
            id: 5,
            title: '',
            subTitle: '',
            btnLabel: 'software',
            isOpen: false,
            className: 'col-md-6 col-lg-4',
            icon: faRocket,
            details: [] // use table
        },
        {
            id: 3,
            title: '',
            subTitle: '',
            btnLabel: 'storage',
            isOpen: false,
            className: 'col-md-6 col-lg-4',
            icon: faHdd,
            details: [
                {
                    label: '',
                    value: '159 GB available of 250 GB'
                },
            ]
        },
        {
            id: 4,
            title: '',
            subTitle: '',
            btnLabel: 'support',
            isOpen: false,
            className: 'col-md-6 col-lg-4',
            icon: faHeadset,
            details: [
                {
                    label: '',
                    value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta placeat veniam nihil optio vel numquam minima soluta voluptatibus quidem asperiores nostrum adipisci, eveniet, tempora perspiciatis sed aut commodi, animi est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta placeat veniam nihil optio vel numquam minima soluta voluptatibus quidem asperiores nostrum adipisci, eveniet, tempora perspiciatis sed aut commodi, animi est. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta placeat veniam nihil optio vel numquam minima soluta voluptatibus quidem asperiores nostrum adipisci, eveniet, tempora perspiciatis sed aut commodi, animi est.'
                },
            ]
        },
        {
            id: 2,
            title: '',
            subTitle: '',
            btnLabel: 'display',
            isOpen: false,
            className: 'col-md-6 col-lg-4',
            icon: faTv,
            details: [
                {
                    label: '',
                    value: 'Built-in Display'
                },
                {
                    label: '',
                    value: '15.4-inch (2880 x 1800)'
                },
                {
                    label: '',
                    value: 'Intel Iris Pro 1536 MB graphics'
                },
            ]
        },
    ];

    data = {
        columns: ['name', 'size', 'created', 'modified', 'opened', 'version'],
        dataSource: [
            {
                name: 'google chrome',
                size: '914.2 MB',
                created: 'Monday, 24 May 2021 at 01:50',
                modified: 'Sunday, 18 July 2021 at 06:40',
                opened: 'Today, 09:58',
                version: '92.0.4515.107',
            },
            {
                name: 'microsoft teams',
                size: '263.8 MB',
                created: 'Monday, 14 June 2021 at 21:33',
                modified: 'Yesterday, 10:26',
                opened: 'Today, 09:06',
                version: '1.00.416567',
            },
            {
                name: 'safari',
                size: '25.6 MB',
                created: '1 January 2020 at 08:00',
                modified: '1 January 2020 at 08:00',
                opened: 'Today, 10:11',
                version: '14.1.1',
            },
            {
                name: 'mock data',
                size: '914.2 MB',
                created: 'mock data',
                modified: 'mock data',
                opened: 'Today, 09:58',
                version: 'mock data',
            },
            {
                name: 'mock data',
                size: '914.2 MB',
                created: 'mock data',
                modified: 'mock data',
                opened: 'mock data',
                version: 'mock data',
            },
            {
                name: 'mock data',
                size: '914.2 MB',
                created: 'mock data',
                modified: 'mock data',
                opened: 'mock data',
                version: 'mock data',
            },
            {
                name: 'mock data',
                size: '914.2 MB',
                created: 'mock data',
                modified: 'mock data',
                opened: 'mock data',
                version: 'mock data',
            },
            {
                name: 'mock data',
                size: '914.2 MB',
                created: 'mock data',
                modified: 'mock data',
                opened: 'mock data',
                version: 'mock data',
            },
            {
                name: 'mock data',
                size: '914.2 MB',
                created: 'mock data',
                modified: 'mock data',
                opened: 'mock data',
                version: 'mock data',
            },

        ]
    }

    constructor(private router: Router, public dialog: MatDialog) { }


    togglExpand(current) {
        console.log(current);

        this.cards
            .filter(el => el != current)
            .forEach((item) => {
                item.isOpen = false;
                item.className = 'col-md-6 col-lg-4';

            });

        current.isOpen = !current.isOpen;


        if (current.isOpen) {
            current.className = 'col-md-6 col-lg-12'
        } else {
            current.className = 'col-md-6 col-lg-4'
        }
    }

    ngOnInit(): void {
    }
}
