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
                    <a href="index.html" data-type="index-link">fingerprint-poc documentation</a>
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
                                <a href="modules/AddDataPageModule.html" data-type="entity-link">AddDataPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddDataPageModule-90656896531447a408a9b4f44353e2a1"' : 'data-target="#xs-components-links-module-AddDataPageModule-90656896531447a408a9b4f44353e2a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddDataPageModule-90656896531447a408a9b4f44353e2a1"' :
                                            'id="xs-components-links-module-AddDataPageModule-90656896531447a408a9b4f44353e2a1"' }>
                                            <li class="link">
                                                <a href="components/AddDataPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDataPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-bf63cdcea1e27dae17614b035008856f"' : 'data-target="#xs-components-links-module-AppModule-bf63cdcea1e27dae17614b035008856f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bf63cdcea1e27dae17614b035008856f"' :
                                            'id="xs-components-links-module-AppModule-bf63cdcea1e27dae17614b035008856f"' }>
                                            <li class="link">
                                                <a href="components/AddDataPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDataPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyApp.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyApp</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScoreListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScoreListPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-bf63cdcea1e27dae17614b035008856f"' : 'data-target="#xs-injectables-links-module-AppModule-bf63cdcea1e27dae17614b035008856f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-bf63cdcea1e27dae17614b035008856f"' :
                                        'id="xs-injectables-links-module-AppModule-bf63cdcea1e27dae17614b035008856f"' }>
                                        <li class="link">
                                            <a href="injectables/DataProvider.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DataProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditPageModule.html" data-type="entity-link">EditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditPageModule-4f01905588e15b84f714388396bbf14f"' : 'data-target="#xs-components-links-module-EditPageModule-4f01905588e15b84f714388396bbf14f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditPageModule-4f01905588e15b84f714388396bbf14f"' :
                                            'id="xs-components-links-module-EditPageModule-4f01905588e15b84f714388396bbf14f"' }>
                                            <li class="link">
                                                <a href="components/EditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScoreListPageModule.html" data-type="entity-link">ScoreListPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ScoreListPageModule-dbc15804b1a7e75232b7c5f0bbb580ca"' : 'data-target="#xs-components-links-module-ScoreListPageModule-dbc15804b1a7e75232b7c5f0bbb580ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ScoreListPageModule-dbc15804b1a7e75232b7c5f0bbb580ca"' :
                                            'id="xs-components-links-module-ScoreListPageModule-dbc15804b1a7e75232b7c5f0bbb580ca"' }>
                                            <li class="link">
                                                <a href="components/ScoreListPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScoreListPage</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                    <a href="injectables/DataProvider.html" data-type="entity-link">DataProvider</a>
                                </li>
                            </ul>
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