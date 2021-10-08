import { Component, OnInit } from '@angular/core';

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
            img: '../../assets/screen.png',
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
                    label: 'memory',
                    value: 'Intel Iris Pro 1536 MB'
                },
                {
                    label: 'serial number',
                    value: 'C02PD7M7G3QC'
                },
            ]
        },
        {
            id: 2,
            title: '',
            subTitle: '',
            btnLabel: 'display',
            isOpen: false,
            img: '../../assets/os.png',
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
        {
            id: 3,
            title: '',
            subTitle: '',
            btnLabel: 'storage',
            isOpen: false,
            img: '../../assets/hd.png',
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
            img: '../../assets/logo.png',
            details: [
                {
                    label: '',
                    value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta placeat veniam nihil optio vel numquam minima soluta voluptatibus quidem asperiores nostrum adipisci, eveniet, tempora perspiciatis sed aut commodi, animi est.'
                },
            ]
        },
        {
            id: 5,
            title: '',
            subTitle: '',
            btnLabel: 'software',
            isOpen: false,
            img: '../../assets/soft.jpeg',
            details: [
                {
                    label: 'Software list',
                    value: ''
                },
            ]
        },
    ];

    constructor() { }

    togglExpand(current) {
        this.cards
            .filter(el => el != current)
            .forEach(item => item.isOpen = false);
        current.isOpen = !current.isOpen;
    }

    ngOnInit(): void {
    }

}
