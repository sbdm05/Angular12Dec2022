'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3d2b408641410fe1590ad0e09164dd9b53a178033100b3153e01a6dcbbf2940ed2b36f855a5909bb60ea1cf89b3b7328e9f34b5071202ed230a0865837b64c0c"' : 'data-target="#xs-components-links-module-AppModule-3d2b408641410fe1590ad0e09164dd9b53a178033100b3153e01a6dcbbf2940ed2b36f855a5909bb60ea1cf89b3b7328e9f34b5071202ed230a0865837b64c0c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3d2b408641410fe1590ad0e09164dd9b53a178033100b3153e01a6dcbbf2940ed2b36f855a5909bb60ea1cf89b3b7328e9f34b5071202ed230a0865837b64c0c"' :
                                            'id="xs-components-links-module-AppModule-3d2b408641410fe1590ad0e09164dd9b53a178033100b3153e01a6dcbbf2940ed2b36f855a5909bb60ea1cf89b3b7328e9f34b5071202ed230a0865837b64c0c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-a52af41a891751c72283a90094e32675edb5483e56b11eabddb56069d970b08464b87b19d5259528a0bac5757057ad1162d4694c52cd55499314e7bd049a44b6"' : 'data-target="#xs-components-links-module-CoreModule-a52af41a891751c72283a90094e32675edb5483e56b11eabddb56069d970b08464b87b19d5259528a0bac5757057ad1162d4694c52cd55499314e7bd049a44b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-a52af41a891751c72283a90094e32675edb5483e56b11eabddb56069d970b08464b87b19d5259528a0bac5757057ad1162d4694c52cd55499314e7bd049a44b6"' :
                                            'id="xs-components-links-module-CoreModule-a52af41a891751c72283a90094e32675edb5483e56b11eabddb56069d970b08464b87b19d5259528a0bac5757057ad1162d4694c52cd55499314e7bd049a44b6"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-de4e61f44460afdbef8b1378a250902d0d9d5849b0a8e8c10d124f1fe7924da87303cc057ef1bdb22bfd9a19115ff8d99d3d144146471aab5ccbeaae81c8410e"' : 'data-target="#xs-components-links-module-IconsModule-de4e61f44460afdbef8b1378a250902d0d9d5849b0a8e8c10d124f1fe7924da87303cc057ef1bdb22bfd9a19115ff8d99d3d144146471aab5ccbeaae81c8410e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-de4e61f44460afdbef8b1378a250902d0d9d5849b0a8e8c10d124f1fe7924da87303cc057ef1bdb22bfd9a19115ff8d99d3d144146471aab5ccbeaae81c8410e"' :
                                            'id="xs-components-links-module-IconsModule-de4e61f44460afdbef8b1378a250902d0d9d5849b0a8e8c10d124f1fe7924da87303cc057ef1bdb22bfd9a19115ff8d99d3d144146471aab5ccbeaae81c8410e"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-d1db37f4606c3a2ca4bba0bd92b40d68e78ba761c1e61fa2e5d8c18b67f5ab13cac6cfb486f9e564a06e18d6b98da888d3bae5052e01a3a090f06c500350b7a0"' : 'data-target="#xs-components-links-module-OrdersModule-d1db37f4606c3a2ca4bba0bd92b40d68e78ba761c1e61fa2e5d8c18b67f5ab13cac6cfb486f9e564a06e18d6b98da888d3bae5052e01a3a090f06c500350b7a0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-d1db37f4606c3a2ca4bba0bd92b40d68e78ba761c1e61fa2e5d8c18b67f5ab13cac6cfb486f9e564a06e18d6b98da888d3bae5052e01a3a090f06c500350b7a0"' :
                                            'id="xs-components-links-module-OrdersModule-d1db37f4606c3a2ca4bba0bd92b40d68e78ba761c1e61fa2e5d8c18b67f5ab13cac6cfb486f9e564a06e18d6b98da888d3bae5052e01a3a090f06c500350b7a0"' }>
                                            <li class="link">
                                                <a href="components/FormOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' : 'data-target="#xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' :
                                            'id="xs-components-links-module-PageNotFoundModule-ff71632f17a3e64bde3955e833e971a2134de7f34cdcdc7d0fe2a9dbfca13b639bd6b40cd40c4dadb24c0bbabffe3c444550cabd13884b36870ed810250c0bc5"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-f54534147b41873bb4f93c471236549698bfdeb6449212ae78d5fe1c88e85bd9ace3e4c42c058b73be14e665f340ff43043516147f555904a77c89842d2d8306"' : 'data-target="#xs-components-links-module-SharedModule-f54534147b41873bb4f93c471236549698bfdeb6449212ae78d5fe1c88e85bd9ace3e4c42c058b73be14e665f340ff43043516147f555904a77c89842d2d8306"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-f54534147b41873bb4f93c471236549698bfdeb6449212ae78d5fe1c88e85bd9ace3e4c42c058b73be14e665f340ff43043516147f555904a77c89842d2d8306"' :
                                            'id="xs-components-links-module-SharedModule-f54534147b41873bb4f93c471236549698bfdeb6449212ae78d5fe1c88e85bd9ace3e4c42c058b73be14e665f340ff43043516147f555904a77c89842d2d8306"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-f54534147b41873bb4f93c471236549698bfdeb6449212ae78d5fe1c88e85bd9ace3e4c42c058b73be14e665f340ff43043516147f555904a77c89842d2d8306"' : 'data-target="#xs-pipes-links-module-SharedModule-f54534147b41873bb4f93c471236549698bfdeb6449212ae78d5fe1c88e85bd9ace3e4c42c058b73be14e665f340ff43043516147f555904a77c89842d2d8306"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-f54534147b41873bb4f93c471236549698bfdeb6449212ae78d5fe1c88e85bd9ace3e4c42c058b73be14e665f340ff43043516147f555904a77c89842d2d8306"' :
                                            'id="xs-pipes-links-module-SharedModule-f54534147b41873bb4f93c471236549698bfdeb6449212ae78d5fe1c88e85bd9ace3e4c42c058b73be14e665f340ff43043516147f555904a77c89842d2d8306"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});