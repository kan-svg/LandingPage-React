import React from 'react';


class Terms extends React.Component {
    
    render() {
        return (
            <>
                <header>
                    <nav>
                        <a href="/"><img class="logo" src="./img/logo.svg" alt="magjobsロゴ" /></a>
                        <ul>
                            <li><a href="..#about">Magtriesについて</a></li>
                            <li><a href="..#can">Magtriesでできること</a></li>
                            <li><a href="..#reason">Magtriesが選ばれる理由</a></li>
                            <li><a href="..#flow">ご利用までの流れ</a></li>
                            <li class="contact_btn"><a href="..#contact">お問い合わせ</a></li>
                        </ul>
                    </nav>
                </header>

                <main class="terms">
                    <h1 class="terms__title">Magjobs利用規約</h1>
                    <h2 class="terms__chapter">目次</h2>
                    <ul class="terms__tablecontents">
                        <li><a href="#chapter1">第1章 総則</a></li>
                        <li><a href="#chapter2">第2章 本サービス</a></li>
                        <li><a href="#chapter3">第3章 ユーザーの責任</a></li>
                        <li><a href="#chapter4">第4章 本サービスの運営・免責等</a></li>
                        <li><a href="#chapter5">第5章 その他</a></li>
                    </ul>

                    <h2 class="terms__chapter" id="chapter1">第1章 総則</h2>
                    <h3 class="terms__article">第1条 総則</h3>
                    <p>1. 本利用規約は、株式会社Magjobs（以下「弊社」といいます。）が提供するインターネットサイト「Magjobs（マグジョブズ）」（以下「本サイト」といいます。）の利用者が遵守すべき利用条件を定めるものです。</p>
                    <p class="terms_last_text">2. 本サービスに関して弊社の定める各種ガイドラインは、本利用規約の一部を構成するものとし、本サービスの利用者は、本利用規約の内容を十分理解した上でその内容を遵守することに同意して本サービスを利用するものとし、本サービスを利用した場合には、当該利用者は本利用規約を遵守することに同意したものとみなします。</p>
                    <h3 class="terms__article">第2条 定義</h3>
                    <p>本利用規約の中で使用される以下の各用語は、それぞれ以下各号の意味を有するものとします。</p>
                    <p>(1)「本サービス」：本サイトの閲覧や本サイトに付随するメール配信等を利用した業務委託に関する情報提供サービスの総称のことをいいます。</p>
                    <p>(2)「ユーザー」：会員又は非会員を問わず本サービスの提供を受ける個人又は法人をさし、本サイトの閲覧者も含みます。</p>
                    <p>(3)「クライアント」：本サービスを通して業務を委託し、又は委託しようとする個人又は法人をさします。</p>
                    <p>(4)「ワーカー」：本サービスを通じて業務を受託し、又は受託しようとする個人又は法人をさします。</p>
                    <p>(5)「受発注者」：クライアント及びワーカーの総称のことをいいます。</p>
                    <p class="terms_last_text">(6)「スポンサー」：本サービスへ案件情報を提供している提供元のことをさします。</p>
                    <h3 class="terms__article">第3条 本利用規約の変更</h3>
                    <p>1．弊社は、次の各号の一に該当する場合、各利用者から個別の同意を得ることなく弊社の裁量で本利用規約を変更することができるものとします。</p>
                    <p>(1) 利用規約の変更が、利用者の一般の利益に適合する場合</p>
                    <p>(2) 利用規約の変更が、契約をした目的に反せず、かつ、変更の必要性、変更後の内容の相当性、その他の変更にかかる事情に照らして合理的なものである場合</p>
                    <p>2．前項に基づく本利用規約の変更にあたり、弊社は、利用者に対して、変更後の利用規約の効力発生日及び変更内容について、事前に以下の各号の一の方法により周知するものとします。</p>
                    <p>(1) 本サイトへの掲載</p>
                    <p>3．変更後の利用規約の効力発生日以降に利用者が本サイトを利用した場合、本利用規約の変更に同意したものとみなします。</p>
                    <p class="terms_last_text">4．規約の変更により利用者に損害が生じた場合であっても、弊社は一切の責任を負いません。</p>

                    <h2 class="terms__chapter" id="chapter2">第2章 本サービス</h2>
                    <h3 class="terms__article">第4条 本サービスの内容について</h3>
                    <p >1. 弊社は、本サービスを通じて、インターネット上の業務委託案件を収集し、受発注者の適合率向上を補助するためのプラットフォームの提供を行います。</p>
                    <p class="terms_last_text">2. 本サービスは、受発注者の適合率向上を補助することが目的であり、弊社は本サイト経由で締結される本取引の当事者とはなりません。</p>

                    <h2 class="terms__chapter" id="chapter3">第3章 ユーザーの責任</h2>
                    <h3 class="terms__article">第5条 自己責任の原則</h3>
                    <p>ユーザは、ユーザによる本サイトの利用とその本サイトを利用してなされた一切の行為とその結果について一切の責任を負います。</p>
                    <p class="terms_last_text">ユーザは、本サイトの利用により本サイト又は他者に対して損害を与えた場合（ユーザが、本規約等における義務を履行しないことにより他者又は本サイトが損害を被った場合を含みます）、自己の責任と費用をもって損害を賠償するものとします。</p>
                    <h3 class="terms__article">第6条 禁止事項</h3>
                    <p>本サービスの利用者が、以下に定める行為を行うことを禁止します。</p>
                    <p>(1) 弊社、他の利用者又は第三者の著作権、商標権等の知的財産権を侵害する行為、又は侵害するおそれのある行為</p>
                    <p>(2) 他の利用者若しくは第三者の財産、プライバシー若しくは肖像権を侵害する行為、又は侵害するおそれのある行為</p>
                    <p>(3) 特定個人の氏名・住所・電話番号・メールアドレスなど第三者が見て個人を特定できる情報を第三者に提供する行為</p>
                    <p>(4) 弊社、他の利用者又は第三者を差別若しくは誹謗中傷し、又は名誉若しくは信用を毀損する行為</p>
                    <p>(5) 弊社又は他者になりすます行為（詐称するためにメールヘッダ等の部分に細工を行う行為を含みます。）</p>
                    <p>(6) 有害なコンピュータプログラム等を送信し、又は他者が受信可能な状態におく行為</p>
                    <p>(7) 他者に対し、無断で、広告・宣伝・勧誘等の電子メール又はメッセージ（以下「電子メール等」といいます。）若しくは嫌悪感を抱くおそれのある内容を含む電子メール等を送信する行為、他者の電子メール等の受信を妨害する行為、連鎖的な電子メール等の転送を依頼する行為及び当該依頼に応じて転送する行為</p>
                    <p>(8) 他者の設備若しくは本サービス用設備（弊社が本サービスを提供するために用意する通信設備、電子計算機、その他の機器及びソフトウェアを言い、以下同様とします。）に無権限でアクセスし、又はポートスキャン、DOS攻撃若しくは大量のメール送信等により、その利用若しくは運営に支障を与える行為、又は支障を与えるおそれのある行為</p>
                    <p>(9) サーバ等のアクセス制御機能を解除又は回避するための情報、機器、ソフトウェア等を流通させる行為</p>
                    <p>(10) 本人の同意を得ることなく、又は詐欺的な手段（いわゆるフィッシング及びこれに類する手段を含みます。）により他者の会員登録情報を取得する行為</p>
                    <p>(11) 他の利用者又は第三者が主導する情報の交換又は共有を妨害する行為、本サービスの運営を妨害する行為、その他弊社に不利益を与えるおそれのある行為</p>
                    <p>(12) 長時間の架電、同様の問い合わせの過度な繰り返し、義務や理由のないことの強要、その他弊社の業務に著しく支障を来たす行為、又はそのおそれのある行為</p>
                    <p>(13) 上記各号の他、法令又は本利用規約に抵触する行為、公序良俗に違反する行為（暴力を助長し、誘発するおそれのある情報又は残虐な映像を送信又は表示する行為や心中の仲間を募る行為等を含みます。）及びその他迷惑行為</p>
                    <p>(14) 上記各号のいずれかに該当する行為（当該行為を他者が行っている場合を含みます。）を助長する目的で他のサイトにリンクを張る行為</p>
                    <p class="terms_last_text">(15) その他弊社が利用者として不適当と判断した行為</p>

                    <h2 class="terms__chapter" id="chapter4">第4章 本サービスの運営・免責等</h2>
                    <h3 class="terms__article">第7条 個人情報の取り扱い</h3>
                    <p class="terms_last_text">弊社は、弊社が知り得た利用者の個人情報を、別途定める「個人情報保護方針」に従い取り扱います。</p>
                    <h3 class="terms__article">第8条 弊社提供サービスに関する知的財産権</h3>
                    <p>1. 本サービスで弊社が作成・提供する画像、テキスト、プログラム等に関する著作権等の一切の知的財産権は、弊社に帰属します。</p>
                    <p class="terms_last_text">2. 本サービスで弊社が作成・提供・掲載する一切の画像、テキスト、プログラム等は、著作権法、商標法等の法律により保護されています。</p>
                    <h3 class="terms__article">第9条 監視業務</h3>
                    <p class="terms_last_text">弊社は、利用者が本サービスを適正に利用しているかどうかを監視する業務を弊社の裁量により行うものとし、利用者はそれに同意するものとします。</p>
                    <h3 class="terms__article">第10条 規約違反への対処及び違約金等</h3>
                    <p>1. 弊社は、利用者が本利用規約違反等の悪質な行為を行っていると判断した場合、当該利用者に対して法的措置を検討するものとします。</p>
                    <p class="terms_last_text">2. 利用者は、利用者が本利用規約違反等の行為を行ったことにより弊社に損害（第三者に損害が生じ、その損害について弊社が填補した場合を含みます。）が生じた場合、その一切の損害について、弊社に対して賠償する責任を負うものとします。</p>
                    <h3 class="terms__article">第11条 サイトの中断・停止・終了</h3>
                    <p>1. 弊社は、システム障害及び保守、地震等の天変地異や火災等の自然災害の発生、その他技術上・運営上の理由により、本サービスの提供が困難であると判断した場合、利用者への事前通知を行わず、本サービスの中断を行う場合があります。</p>
                    <p class="terms_last_text">2. 弊社は、本条に基づき弊社が行った措置に基づき利用者に生じた損害について一切の責任を負いません。</p>
                    <h3 class="terms__article">第12条 免責</h3>
                    <p>1. 会員登録取消し、利用者からのID・パスワードの第三者に漏洩、利用者による秘密漏示、本サービスのシステム不具合や障害・中断やデータの消失・漏洩等により生じた不利益・損害等、本サービスの利用により利用者に生じた一切の不利益・損害について弊社は一切の責任を負いません。</p>
                    <p>2. 利用者が、本サービスを利用することにより、他の利用者又は第三者に対し不利益・損害を与えた場合、利用者は自己の費用と責任においてこれを賠償するものとし、これらの一切の不利益・損害について弊社は一切責任を負いません。</p>
                    <p>3. 弊社は本サービス上で行われる受発注者間の取引を管理するものではなく、取引によって生じた一切の不利益・損害について一切責任を負いません。</p>
                    <p class="terms_last_text">4. 本サービス上でやりとりされるメッセージや送受信されるファイルに個人情報等が含まれていた場合、それによって会員が被った不利益・損害について、弊社は一切責任を負いません。</p>

                    <h2 class="terms__chapter" id="chapter5">第5章 その他</h2>
                    <h3 class="terms__article">第13条 反社会的勢力の排除</h3>
                    <p>1．弊社及び利用者は、相手方に対し、当該利用者による本サービスの利用開始時点において、自己及び自己の取締役、執行役、執行役員等の経営に実質的に関与する重要な使用人、実質的に経営権を有する者が反社会的勢力に該当しないことを表明し、かつ当該利用者による本サービスの利用期間中該当しないことを保証するものとします。なお、本条において「反社会的勢力」とは、暴力団員による不当な行為の防止等に関する法律（以下「暴対法」といいます。）第2条第2号に定義される暴力団、暴対法第2条第6号に定義される暴力団員、暴力団員でなくなった日から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋、社会運動標榜ゴロ、政治活動標榜ゴロ、特殊知能暴力集団、暴力団密接関係者及びその他の暴力的な要求行為若しくは法的な責任を超えた不当要求を行う集団又は個人をいうものとします。</p>
                    <p>2．弊社及び利用者は、本サービスの利用に関連して自ら又は第三者を利用して以下の各号に該当する行為を行わないことを、相手方に対し、保証するものとします。</p>
                    <p>(1)暴力的な要求行為</p>
                    <p>(2)法的な責任を超えた不当な要求行為</p>
                    <p>(3)脅迫的な言動をし、又は暴力を用いる行為</p>
                    <p>(4)風説を流布し、偽計又は威力を用いて他方当事者の信用を棄損し、又は他方当事者の業務を妨害する行為</p>
                    <p class="terms_last_text">(5)その他前各号に準ずる行為</p>
                    <h3 class="terms__article">第14条準拠法・分離可能性・管轄裁判所</h3>
                    <p>1．本利用規約は、日本法に基づき解釈されるものとします。</p>
                    <p class="terms_last_text">2．本利用規約の一部について裁判所やその他正当な権限を有する機関により違法、執行不能又は無効とされた場合、その違法性、執行不能性又は無効性は、本利用規約の他の条項の適法性、執行可能性又は有効性に一切影響を与えないものとします。</p>
                    
                </main>

                <footer>
                    <p class="footer_left"></p>
                    <p class="copyright">©Magjobs Inc.</p>
                    <div class="footer_text">
                        <a href="#">会社概要</a>
                        <a href="terms">利用規約</a>
                        <a href="privacy">プライバシーポリシー</a>
                    </div>
                </footer>
            </>
        )
    }
}

export default Terms