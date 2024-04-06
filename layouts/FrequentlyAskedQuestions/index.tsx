'use client'

import {
    Container,
    FAQItem,
    FAQItemsWrapper,
    SectionTextHeading,
  } from './styles';
  
  const frequentlyAskedQuestions = [
    {
      questionTitle: 'How much does your web design service cost',
      questionID: 'question1',
      collapseID: 'collapse1',
      questionDetails:
        'We usually charge 30, 000 Naira per design, but the price is negotiable depending on your budget and scale of the project.',
    },
    {
      questionTitle: 'How long does it take to build a website',
      questionID: 'question2',
      collapseID: 'collapse2',
      questionDetails:
        'It takes about 4 to 7 days for our web designers to complete a website, but it could take longer, depending on the scale of the website.',
    },
    {
      questionTitle: 'How long will the website last',
      questionID: 'question3',
      collapseID: 'collapse3',
      questionDetails:
        "The website's domain name will only last for a year, after that you have to pay again to renew the domain name, but just the domain name, which is usually cheap.",
    },
    {
      questionTitle: 'Do you have to pay for hosting after the website is built',
      questionID: 'question4',
      collapseID: 'collapse4',
      questionDetails:
        'Once you pay us the one time fee our expert team of web designers will give you our full support plus hosting and getting a domain name.',
    },
  ];
  
  const index: React.FC = () => {
    return (
      <Container>
        <div className="text-lg-center text-sm-end">
          {' '}
          <SectionTextHeading>Questions we usually get</SectionTextHeading>
        </div>
        <FAQItemsWrapper>
          {frequentlyAskedQuestions.map(
            ({ questionTitle, questionDetails, questionID, collapseID }) => (
              <FAQItem key={questionTitle}>
                <div className="accordion" id={questionID}>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseID}`}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {questionTitle}
                      </button>
                    </h2>
                    <div
                      id={collapseID}
                      className="accordion-collapse collapse "
                      data-bs-parent={`#${questionID}`}
                    >
                      <div className="accordion-body">{questionDetails}</div>
                    </div>
                  </div>
                </div>
              </FAQItem>
            )
          )}
        </FAQItemsWrapper>
      </Container>
    );
  };
  
  export default index;
  