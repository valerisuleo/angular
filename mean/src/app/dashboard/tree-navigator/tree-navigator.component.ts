import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TreeComponent, TreeModel, TreeNode } from 'angular-tree-component';


@Component({
  selector: 'tree-navigator',
  templateUrl: './tree-navigator.component.html',
  styleUrls: ['./tree-navigator.component.scss']
})
export class TreeNavigatorComponent implements AfterViewInit {

  nodes = [
    {
      id: 4,
      name: 'Attività',
      children: [
        {
          id: 6,
          name: 'Canale',
          children: [
            { id: 7, name: 'Documento' }
          ]
        }
      ]
    }
  ];
  @ViewChild('tree') tree;


  constructor() { }

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }

}
