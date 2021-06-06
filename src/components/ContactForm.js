import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  handleSubmit() {
    this.setState( {isSubmitted: true})
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          <h1>お問い合わせ 送信完了</h1>
          <p>
          お問い合わせありがとうございました。<br/>
          内容を確認のうえ、回答させて頂きます。<br/>
          しばらくお待ちください。
          </p>
          <a href="/">
            <input class="submit_btn" type="submit" value="ホーム画面に戻る" />
          </a>
        </div>
      );
    } else {
        contactForm = (
          <form class="contact_form" onSubmit={()=>{this.handleSubmit()}} >
            <p class="contact_message"><img src="./img/contact_message.svg" alt="１分で完了！簡単お問い合わせ" /></p>
            <table>
                <tr>
                    <th>名前</th>
                    <td class="name_box"><input class="family-name" name="family-name" type="text"
                            placeholder="山田" required="true" autocomplete="family-name" /><input
                            class="given-name" name="given-name" type="text" placeholder="太郎"
                            required="true" autocomplete="given-name" /></td>
                </tr>
                <th>メールアドレス</th>
                <td><input type="email" name="email" placeholder="sample@gmail.com" 　required="true"
                        autocomplete="email" /></td>
                <tr>
                  <th>依頼したい内容</th>
                  <td class="form_checkbox_flex">
                  <label class="checkbox" for="hp"><input type="checkbox" name="contents"
                          value="IT活用で売上アップ" id="hp" />IT活用で売上アップ</label>
                  <label class="checkbox" for="ec"><input type="checkbox" name="contents"
                          value="新規サービスの開発" id="ec" />新規サービスの開発</label>
                  <label class="checkbox" for="webapplication"><input type="checkbox" name="contents"
                          value="IT活用で業務効率化" id="webapplication" />IT活用で業務効率化</label>
                  </td>
                </tr>
                <tr>
                    <th class="contact_contents">お問い合わせ内容</th>
                    <td><textarea name="other" cols="50" rows="15"></textarea></td>
                </tr>
            </table>
            <input class="submit_btn" type="submit" value="送信" />
          </form>
        );
      }

    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
