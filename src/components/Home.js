import React from 'react';
import ContactForm from './ContactForm'


class Home extends React.Component {
    
    render() {
        return (
            <>
                <header>
                    <nav>
                        <a href="/"><img class="logo" src="../img/logo.svg" alt="magjobsロゴ" /></a>
                        <ul>
                            <li><a href="#about">Magtriesについて</a></li>
                            <li><a href="#can">Magtriesでできること</a></li>
                            <li><a href="#reason">Magtriesが選ばれる理由</a></li>
                            <li><a href="#flow">ご利用までの流れ</a></li>
                            <li class="contact_btn"><a href="#contact">お問い合わせ</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <section class="main__photo">
                        <h1 class="main__photo_title">
                            <picture class="sample">
                                <source srcset="./img/spmainview.jpg" media="(max-width:600px)" />
                                <img class="main__photo_img" src="./img/mainview.jpg" alt=" 初月無料！ITですべての課題を解決します" />
                            </picture>
                            <a class="main__contact_btn" href="#contact">まずは無料で相談する</a>
                        </h1>
                        <a class="spmain__contact_btn" href="#contact">まずは無料で相談する</a>
                    </section>


                    <section class="about">
                        <div class="contents_inner about_inner">
                            <h2 class="title about_title" id="about"><ruby>Magtries<rt>マグトライズ</rt></ruby>について</h2>
                            <div class="about_wrapper">
                                <div class="about_text_wrapper">
                                    <h3 class="about__text_title point point1">
                                        <p>ITでお客様の課題をすべて解決</p>
                                    </h3>
                                    <p class="about__text">
                                        「もっと売上を上げたい」「新しい事業をはじめたい」そんなお客様が抱える問題を、MagtriesがITの力を駆使してすべて解決します。</p>
                                </div>
                                <div class="about_img_wrapper">
                                    <img class="about_img" src="./img/point1.jpg" alt="ITでお客様の課題をすべて解決" />
                                </div>
                            </div>
                            <div class="about_wrapper about_wrapper_reverse">
                                <div class="about_text_wrapper about_text_wrapper2">
                                    <h3 class="about__text_title point point2"><p>完成のない開発スタイル</p></h3>
                                    <p class="about__text about__text2">
                                        私たちが目指しているのは「納品」ではなく「お客様の成功」です。そのため納品を目的とする一括請負は行わず、成功するまでお客様に寄り添えるよう月額定額を採用しています。</p>
                                </div>
                                <div class="about_img_wrapper about_img_wrapper2">
                                    <img class="about_img" src="./img/point2.jpg" alt="完成のない開発スタイル" />
                                </div>
                            </div>

                            <div class="about_wrapper">
                                <div class="about_text_wrapper">
                                    <h3 class="about__text_title point point3">
                                        <p>初月無料で開発します</p>
                                    </h3>
                                    <p class="about__text">
                                        まずは私たちを信頼してもらいたいため、最初の1ヶ月は完全無料で対応いたします。もちろん相談し放題、サービス開発も進めていきます。そして1ヶ月後、継続するもしないもお客様次第です。
                                    </p>
                                </div>
                                <div class="about_img_wrapper">
                                    <img class="about_img" src="./img/point3.jpg" alt="初月無料で開発します" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="can">
                        <h2 class="title can__title" id="can">Magtriesでできること</h2>
                        <div class="contents_inner can_contents_inner">
                            <div class="things">
                                <div class="thing">
                                    <p class="thing_image_wrapper"><img class="thing_image" src="./img/up.svg" alt="IT活用で売上アップ" /></p>
                                    <div class="thing_block">
                                        <h3 class="thing_title">IT活用で売上アップ</h3>
                                        <p class="thing_text">企業のホームページや集客用のLP制作、そして集客するためのWEBマーケティングまでを一気通貫で行います。作業時間ではなく、「売上アップ」という価値を提供します。</p>
                                        <ul class="thing_list">
                                            <li><p>ホームページ、LP制作</p></li>
                                            <li><p>マーケティング</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="thing">
                                    <p class="thing_image_wrapper"><img class="thing_image" src="./img/development.svg"
                                            alt="新規サービスの開発" /></p>
                                    <div class="thing_block">
                                        <h3 class="thing_title">新規サービスの開発</h3>
                                        <p class="thing_text">新しいWEBサービスを開発します。まずは必要最低限の機能を実装してリリースした後、利用者の様子を確認しながら機能の追加・改善をしていくスタイルを推奨しています。
                                        </p>
                                        <ul class="thing_list">
                                            <li><p>アプリケーション開発</p></li>
                                            <li><p>スマホアプリ開発</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="thing">
                                    <p class="thing_image_wrapper"><img class="thing_image smartphone_image"
                                            src="./img/no-code.svg" alt="IT活用で業務効率化" /></p>
                                    <div class="thing_block">
                                        <h3 class="thing_title">IT活用で業務効率化</h3>
                                        <p class="thing_text">いつも手作業で行っている業務を自動化します。定量的な作業をプログラムに任せて、重要な仕事に集中しましょう。</p>
                                        <ul class="thing_list">
                                            <li><p>システム開発</p></li>
                                            <li><p>自動化システム</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="reason">
                        <div class="contents_inner">
                            <h2 class="title" id="reason">Magtriesが選ばれる理由</h2>
                            <div class="reason_flex">
                                <div class="reason_block">
                                    <img class="reason_image" src="./img/money.svg" alt="無駄遣いさせない月額料金" />
                                    <div>
                                        <h3 class="reason_title">無駄遣いさせない月額定額</h3>
                                        <p class="reason_text">
                                            「この機能の実装は○○円」「機能追加するので○○円追加」納品ベースの一括委託ですと、このような根拠のない料金設定により損してしまいます。だからMagtriesではお客様に無駄遣いをさせないように、月額定額で必要な機能を必要なだけ実装します。
                                        </p>
                                    </div>
                                    <p class="reason_number"><img src="./img/01.svg" alt="01" /></p>

                                </div>
                                <div class="reason_block">
                                    <img class="reason_image" src="./img/time.svg" alt="契約解除がいつでも可能" />
                                    <div>
                                        <h3 class="reason_title">契約解除がいつでも可能</h3>
                                        <p class="reason_text">
                                            Magtriesでは「最低○ヶ月」という契約期間はありません。もちろん途中で契約解除した場合も解除料などいただくことはなく、「今月は営業に集中したい」など一時停止も自由です。お客様のご都合に合わせて柔軟に対応可能です。
                                        </p>
                                        <p class="reason_number"><img src="./img/02.svg" alt="01" /></p>
                                    </div>

                                </div>
                                <div class="reason_block">
                                    <img class="reason_image" src="./img/dash2.svg" alt="走りながら開発するスタイル" />
                                    <div>
                                        <h3 class="reason_title">走りながら開発するスタイル</h3>
                                        <p class="reason_text">
                                            納品ベースの場合は完成するまでリリースできません。ですがMagtriesでは一刻も早くリリースし、仮説検証しながら改善・改良を重ねていく開発スタイルを得意としています。一刻も早く世の中へ送り出しましょう。
                                        </p>
                                        <p class="reason_number"><img src="./img/03.svg" alt="01" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="flow">
                        <div class="contents_inner">
                            <h2 class="title" id="flow">ご利用までの流れ</h2>
                            <div class="flow_flex">
                                <div class="flow_block">
                                    <p class="flow_image"><img src="./img/mail2.svg" alt="お問い合わせ" /></p>
                                    <p class="flow_step">STEP1</p>
                                    <p class="flow_text">お問い合わせ</p>
                                </div>
                                <p class="sankaku_wrapper"><img class="sankaku" src="./img/sankaku.svg" alt="" /></p>
                                <div class="flow_block">
                                    <p class="flow_image"><img src="./img/meeting.svg" alt="ご相談期間" /></p>
                                    <p class="flow_step">STEP2</p>
                                    <p class="flow_text">ご相談期間<br />（無料/4回まで）</p>
                                </div>
                                <p class="sankaku_wrapper"><img class="sankaku" src="./img/sankaku.svg" alt="" /></p>
                                <div class="flow_block">
                                    <p class="flow_image"><img src="./img/pen.svg" alt="ご契約" /></p>
                                    <p class="flow_step">STEP3</p>
                                    <p class="flow_text">ご契約</p>
                                </div>
                                <p class="sankaku_wrapper"><img class="sankaku" src="./img/sankaku.svg" alt="" /></p>
                                <div class="flow_block">
                                    <p class="flow_image"><img src="./img/gear.svg" alt="お試し期間" /></p>
                                    <p class="flow_step">STEP4</p>
                                    <p class="flow_text">お試し期間<br />（無料/１か月）</p>
                                </div>
                                <p class="sankaku_wrapper"><img class="sankaku" src="./img/sankaku.svg" alt="" /></p>
                                <div class="flow_block">
                                    <p class="flow_image flow_image_last"><img src="./img/hand.svg" alt="ご継続判断" /></p>
                                    <p class="flow_step">STEP5</p>
                                    <p class="flow_text">ご継続判断</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="contact">
                        <div class="contact_inner">
                            <div class="contents_inner">
                                <h2 class="title" id="contact">お問い合わせ</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </section>

                </main>
                <footer>
                    <p class="footer_left"></p>
                    <p class="copyright">©Magjobs Inc.</p>
                    <div class="footer_text">
                        <a href="#">会社概要</a>
                        <a href="/terms">利用規約</a>
                        <a href="privacy">プライバシーポリシー</a>
                    </div>
                </footer>
            
            </>
            )
        }
    }

export default Home