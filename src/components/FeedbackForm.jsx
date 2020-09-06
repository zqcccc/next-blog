import React from 'react';
import './FeedbackForm.less';
import './ArticleContent.less';

export default class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nickname: '',
        mail: '',
        title: '',
        detail: '',

      },
    };
  }

  componentDidMount() {
  }

  setForm(obj = {}) {
    const { form } = this.state;
    const newForm = { ...form, ...obj };
    this.setState({
      form: newForm,
    });
  }

  submitFeedback() {
    const { form } = this.state;
    console.log(form);

    alert('提交留言的接口已经完成，但是由于某些原因暂未开放（iconie）');
  }

  render() {
    const { form = {} } = this.state;
    return (
      <div className="post-container">

        <div className="post-title">
          给我留言
        </div>

        <div className="form-item">

          <label htmlFor="name">
            昵称：
            <input
              id="name"
              autoComplete="off"
              value={form.nickname}
              onChange={(e) => {
                this.setForm({
                  nickname: e.target.value,
                });
              }}
            />
          </label>

        </div>

        <div className="form-item">

          <label htmlFor="mail">
            邮箱：
            <input
              id="mail"
              autoComplete="off"
              value={form.mail}
              onChange={(e) => {
                this.setForm({
                  mail: e.target.value,
                });
              }}
            />
          </label>

        </div>

        <div className="form-item">

          <label htmlFor="title">
            标题：
            <input
              id="title"
              autoComplete="off"
              value={form.title}
              onChange={(e) => {
                this.setForm({
                  title: e.target.value,
                });
              }}
            />
          </label>

        </div>

        <div className="form-item">

          <label htmlFor="detail">
            详情：
            <textarea
              id="detail"
              autoComplete="off"
              value={form.detail}
              onChange={(e) => {
                this.setForm({
                  detail: e.target.value,
                });
              }}
            />
          </label>

        </div>

        <div className="form-item">

          <button type="button" onClick={() => { this.submitFeedback(); }}>提交留言</button>

        </div>

      </div>
    );
  }
}
