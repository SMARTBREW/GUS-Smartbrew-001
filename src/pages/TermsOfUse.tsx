import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with consistent styling */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-normal mb-8">
              <span className="text-gray-800">TERMS & CONDITIONS</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              These are the Terms and Conditions of Use for the Gramin Utthan Samity (G.U.S.) online website.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Gramin Utthan Samity (G.U.S.) is a Not-for-Profit organisation, having its office at Kumaon Hills, Uttarakhand, India, which has its online portal at www.gus.org.in (the "Site"). By using (browsing or donating or shopping on) our Site or by subscribing to or using any of our services ("Services"), you agree to comply with and be bound by the following terms of use (collectively, the "Terms of Use").
              </p>

              <p className="mb-6">
                Please review the following terms carefully. If you do not agree to any of these terms, please do not use this Site. These Terms of Use and various other policies are binding as per the provisions of the Information Technology (Intermediaries Guidelines) Rules 2011 formulated under the Information Technology Act 2000.
              </p>

              <p className="mb-8">
                The term "GUS" or "us", "our" or "we" refers to the owner of the Site, i.e. Gramin Utthan Samity. The term "you" refers to you, the user or viewer of our Site or any of the Services.
              </p>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">1) CHANGES TO TERMS</span>
                </h2>
                <p className="mb-4">
                  GUS reserves the right to change any of the terms and conditions contained in these Terms of Use or any policies or guidelines governing the Site or Services at any time and in its sole discretion. Changes to the Terms of Use and referenced policies and guidelines may be posted without notice to you.
                </p>
                <p className="mb-4">
                  Your continued use of our Site and Services following any changes will constitute your acceptance of such changes or modifications. If you do not agree to any changes to these terms, do not continue to use the Services or this Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">2) PRIVACY</span>
                </h2>
                <p className="mb-4">
                  Please see our Privacy Policy to understand how we use and share information about you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">3) PASSWORD</span>
                </h2>
                <p className="mb-4">
                  GUS may assign, or require that you have, a password and username to enable you to use and access certain portions and features of this Site. Keep your password secure. You are fully and solely responsible for all activity, liability and damage resulting from your failure to maintain password confidentiality and/or to restrict access to your computer. You will be solely responsible for activities by anyone using the account or password assigned to you, including without limitation, all communications and transmissions and all financial obligations incurred through the use of our Site.
                </p>
                <p className="mb-4">
                  You agree to immediately notify GUS of any unauthorised use of your password and/or account identification/username or any breach of security. You also agree that GUS cannot and will not be liable for any loss or damage arising from your failure to keep your password secure.
                </p>
                <p className="mb-4">
                  GUS cannot and will not be liable for any loss or damage arising from your failure to comply with this sub-clause 3.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">TERMINATION OF SERVICE</span>
                </h2>
                <p className="mb-4">
                  GUS reserves the right to refuse its Services to anyone for any reason, terminate accounts, remove or edit content, limit, condition or cancel orders in its sole and absolute discretion. Without limiting the foregoing, GUS may, but is not required to, impose transaction limits on some or all buyers and sellers relating to the value of any transaction or disbursement, the cumulative value of all transactions or disbursements during a period of time, or the number of transactions per day or other period of time.
                </p>
                <p className="mb-4">
                  GUS will not be liable to any User/ buyer: (i) if User, does not proceed with a transaction or disbursement that would exceed any limit established by us for a security reason; or (ii) if User exits from such transaction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">4) LICENSE & SITE ACCESS</span>
                </h2>
                <p className="mb-4">
                  Subject to the terms and conditions of these Terms of Use, GUS hereby grants you a limited, revocable, non-transferable and non-exclusive license to access and use the Site by displaying it on your internet browser only for the purpose of browsing content, shopping for products, uploading reviews, and interacting with other Site users on the Site. Users may not use the Site for any commercial use or use on behalf of any third party.
                </p>
                <p className="mb-4">
                  You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile or otherwise exploit this Site or any portion of it by any means, unless expressly permitted by GUS. For the removal of doubt, it is clarified that unlimited or wholesale reproduction, copying of the content for commercial or non-commercial purposes and unwarranted modification of data and information within the content of the Site is not permitted.
                </p>
                <p className="mb-4">
                  You may not use the Site or any materials obtained from the Site to develop, or as a component of, any information, storage and retrieval system, database, information base, or similar resource (in any media now existing or hereafter developed), that is offered for commercial distribution of any kind, including through sale, lease, license, rental, subscription, or any other commercial distribution mechanism. You also may not "mirror" or "frame" any material contained on the Site on any other server.
                </p>
                <p className="mb-4">
                  You many not use any manual or automated software, devices, or other processes to "crawl" or "spider" any web pages contained in the Site. You may not monitor or copy, or allow others to monitor or copy, our web pages or the content included herein. Furthermore, you agree not to take any action that interferes with the proper working of or places an unreasonable load on our infrastructure, including but not limited to unsolicited communications, attempts to gain unauthorised access, or transmission or activation of computer viruses.
                </p>
                <p className="mb-4">
                  You shall not upload to, distribute, or otherwise publish on our Site any content, information, or other material that (a) violates or infringes the copyrights, patents, trademarks, service marks, trade secrets, or other proprietary rights of any person or organisation, unless you are the owner of such rights or have permission from their rightful owner to post the material and to grant all of the licence rights granted herein; (b) is libellous, threatening, defamatory, obscene, indecent, pornographic, harassing, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offence, or could give rise to any civil or criminal liability under India or international law; (c) includes any bugs, viruses, worms, trap doors, Trojan horses or other harmful code or properties, (d) advertises or solicits business, or (e) impersonates another person.
                </p>
                <p className="mb-4">
                  Any breach of these Terms of Use may result in the immediate revocation of the licence granted above, without notice to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">5) LINKS TO THIRD PARTY SITES</span>
                </h2>
                <p className="mb-4">
                  Our Site may contain links to web sites controlled, owned, and operated by affiliated companies, individuals and other businesses ("Third-Party Sites"). We do not control or endorse any Third Party Site. We are not responsible for examining or evaluating information provided on the Third-Party Sites, and we cannot control and have no responsibility for the accuracy or availability of information provided on the Third-Party Sites. Your use of Third Party Sites is at your own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">6) INTELLECTUAL PROPERTY</span>
                </h2>
                <p className="mb-4">
                  The GUS logo, and other graphics, logos, campaigns, products, designs, page headers, button icons, scripts, and service names are registered trademarks belonging to gus.org.in in India and/or other countries. GUS's trademarks may not be used, including as part of trademarks and/or as part of domain names or email addresses, in connection with any third party product or Services in any manner that is likely to cause confusion with GUS's product or Services.
                </p>
                <p className="mb-4">
                  Users shall not use our graphics, logos, content, appearance, design, functionality and any other aspects of the Site and the Services in any manner that could cause confusion or could disparage or discredit GUS.
                </p>
                <p className="mb-4">
                  Other than user uploaded content, all content included on the Site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of GUS and is protected by copyright laws. The compilation of all content on the Site is the exclusive property of GUS and protected by India and international copyright laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">7) REVIEWS, COMMENTS & FEEDBACK</span>
                </h2>
                <p className="mb-4">
                  Users may post reviews on the Site. Anything that you submit or post to the Site and/or provide us (the "Submissions"), is and will be treated as non-confidential and non-proprietary, and you grant us a royalty-free, worldwide, perpetual, irrevocable and transferable right to use, copy, distribute, display, publish, perform, sell, lease, transmit, adapt, modify, create derivative works from such Submissions by any means and in any form, and to translate, modify, reverse-engineer, disassemble, or decompile such Submissions. You may edit or delete such submissions using the tools provided to you by us on the Site.
                </p>
                <p className="mb-4">
                  In addition, when you post Submissions to the Site, you also grant us the right to use the name that you submit with any review, comment, or other content, if any, in connection with such review, comment, or other content. You represent and warrant that you own or otherwise control all of the rights to the Submissions that you post on our Site and that use of your reviews, comments, or other Submissions by us will not infringe upon or violate the rights of any third party.
                </p>
                <p className="mb-4">
                  You shall not use a false e-mail address, pretend to be someone other than you or otherwise mislead us, our affiliates or third parties as to the origin of any Submissions. We have the right, but shall not be obligated to, remove or edit any Submissions for any reason in its sole and absolute discretion.
                </p>
                <p className="mb-4">
                  You agree not to, and will not assist, encourage, or enable others to use Submissions to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Offend us/ any other user/ the public, for example, by writing a fake or defamatory review, trading reviews with other businesses, or compensating someone or being compensated to write or remove a review;</li>
                  <li>Violate any third party's rights, including any breach of confidence, copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right;</li>
                  <li>Threaten, stalk, harm, or harass others, or promote bigotry or discrimination;</li>
                  <li>Promote a business or other commercial venture or event, or otherwise use the Site for commercial purposes;</li>
                  <li>Send bulk emails, surveys, or other mass messaging, whether commercial in nature or not; engage in keyword spamming, or otherwise attempt to manipulate the Site's search results or any third party website;</li>
                  <li>Solicit personal information from minors, or submit or transmit pornography; or</li>
                  <li>Violate any applicable law.</li>
                </ul>
                <p className="mb-4">
                  By sending us any ideas, suggestions, documents or proposals ("Feedback"), you agree that (i) your Feedback does not contain the confidential or proprietary information of third parties, (ii) we are under no obligation of confidentiality, express or implied, with respect to the Feedback, and (iii) you grant us an irrevocable, non-exclusive, royalty-free, perpetual, worldwide license to use, modify, prepare derivative works, publish, distribute and sublicense the Feedback, and you irrevocably waive, and cause to be waived, against GUS and its users any claims and assertions of any moral rights contained in such Feedback.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">8) RETURN POLICY</span>
                </h2>
                <p className="mb-4">
                  GUS does not accept returns or refund amounts for any donations made either one time or regular. Please see the Refund & Cancellation Policy for one-time and regular donations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">9) DISCLAIMER & WARRANTIES</span>
                </h2>
                <p className="mb-4">
                  The Site, the Services, donations made and the products purchased by you are provided on an "as is" basis. GUS makes no other representations or warranties of any kind, express, implied or statutory. GUS, and its subsidiaries, affiliates, officers, directors, employees, shareholders, agents, merchants and suppliers specifically disclaim any implied warranties of title, merchantability, performance, fitness for a particular purpose and non-infringement. In addition, no advice or information (oral or written) obtained by you from GUS shall create any warranty. GUS has endeavoured to ensure that all the information on the Site is correct, but GUS neither warrants nor makes any representations regarding the quality, accuracy or completeness of any data, information, product or Service. In no event shall GUS be liable for any direct, indirect, punitive, incidental, special, consequential damages or any other damages resulting from: (a) the use or the inability to use the Services or products; (b) unauthorised access to or alteration of the user's transmissions or data; (c) any third party site; (d) including without limitation, lost profits, bodily injury, emotional distress, or any special, incidental or consequential damages, arising out of or in any way connected with the use or performance of the Site or the Services. The user understands and agrees that any material and/or data downloaded or otherwise obtained through the Site is done entirely at their own discretion and risk and they will be solely responsible for any damage to their computer systems or loss of data that results from the download of such material and/or data. Without limiting the foregoing, we do not guarantee continuous, uninterrupted access to the Site or the Services, and operation of the Site may be interfered with by numerous factors outside our control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">10) INDEMNITY </span>
                </h2>
                <p className="mb-4">
                  You agree to indemnify, defend and hold GUS and (as applicable) its subsidiaries, affiliates, officers, directors, agents, and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of or relating to (i) your breach of the Terms of Use (and any documents they incorporate by reference); (ii) your own use of the Site or the Services; (iii) any products or services purchased or obtained by you in connection with the Site; (iv) the infringement by you, or any third party using your account, of any intellectual property or other right of any person or entity; or (v) your violation of any law or the rights of a third party.
                </p>
                <p className="mb-4">
                  GUS reserves the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us and you agree to cooperate with our defence of these claims. You agree not to settle any such matter without the prior written consent of GUS. GUS will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">11) TERMINATION</span>
                </h2>
                <p className="mb-4">
                  You agree that we may, with or without cause, immediately terminate your account and access to our Site and Services without prior notice. Without limiting the foregoing, the following may lead to the termination by GUS of a user's use of the Site and the Services: (a) breaches or violations of the Terms of Use or other incorporated documents, policies or guidelines; (b) requests by law enforcement or other government agencies; (c) a request by you (self-initiated account deletions); or (d) unexpected technical issues or problems. Termination of your GUS account includes (without liability to GUS): (i) removal of access to all offerings within the Site and the Services, (ii) possible barring you from further use of our Site and Services, and (iii) revoking all password(s) and usernames issued to or chosen by you. Furthermore, you agree that all terminations shall be made in our sole discretion and that we shall not be liable to you nor to any third-party for any termination of your account or access to our Site and Services.
                </p>
                <p className="mb-4">
                  You may terminate the Terms of Use at any time by closing your account, discontinuing your use of the Site, and providing GUS with a notice of termination mailed to info@gus.org.in
                </p>
                <p className="mb-4">
                  Any termination of access or of the Terms of Use shall not affect the respective rights and obligations (including without limitation, payment obligations) of the user arising before the date of termination.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">12) APPLICABLE LAW</span>
                </h2>
                <p className="mb-4">
                  The laws of India shall govern these Terms of Use, without giving effect to any principles of conflicts of laws or the Convention on Contracts for the International Sale of Goods. Any dispute arising out of the provisions of these Terms of Use or your use of the Site or Services shall be adjudicated to the exclusive jurisdiction in, and the exclusive venue of the courts in New Delhi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">13) COPYRIGHT COMPLAINTS</span>
                </h2>
                <p className="mb-4">
                  We respect the intellectual property rights of others and we prohibit users from uploading, posting or otherwise transmitting on our Site or in connection with the Services any materials that violate another party's intellectual property rights. When we receive proper notification of alleged copyright infringement, we promptly remove or disable access to the allegedly infringing material and terminate the accounts of repeat infringers as described herein in accordance with the Indian Copyright Act 1957.
                </p>
                <p className="mb-4">
                  If you believe that any content on the Site may give rise to copyright infringement, please provide GUS with the written information specified below:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>An electronic or physical signature of the person authorised to act on behalf of the owner of the copyright interest.</li>
                  <li>A description of the copyrighted work that you claim has been infringed upon;</li>
                  <li>A description of where the material that you claim is infringing is located on the site, including the product name, if applicable;</li>
                  <li>Your address, telephone number, and e-mail address;</li>
                  <li>A statement by you that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                  <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorised to act on the copyright owner's behalf.</li>
                </ul>
                <p className="mb-4">
                  Please send notices to GUS and mail at info@gus.org.in
                </p>
                <p className="mb-4">
                  We reserve the right to remove content alleged to be infringing without prior notice and at our sole discretion.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">14) REPEAT INFRINGER POLICY</span>
                </h2>
                <p className="mb-4">
                  GUS may also at its sole discretion limit access to the Site and/or terminate the memberships of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">15) RESOLUTION OF DISPUTES</span>
                </h2>
                <p className="mb-4">
                  In the event a dispute arises between you and GUS, please contact us at info@gus.org.in and should you have a dispute with one or more user or an outside party, you release GUS (and GUS's officers, directors, agents, subsidiaries, joint ventures and employees) from any and all claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with such dispute.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">16) SEVERABILITY</span>
                </h2>
                <p className="mb-4">
                  If any provision of these Terms of Use is held by a court of competent jurisdiction to be unenforceable under applicable law, then such provision shall be excluded from these Terms of Use and the remainder of the Terms of Use shall be interpreted as if such provision were so excluded and shall be enforceable in accordance with its terms; provided, however, that in such event these Terms of Use shall be interpreted so as to give effect, to the greatest extent consistent with and permitted by applicable law, to the meaning and intention of the excluded provision as determined by such court of competent jurisdiction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">17) NOTICES</span>
                </h2>
                <p className="mb-4">
                  All notices to users will be sent by e-mail or will be posted on the Site. We will send notices to users at the e-mail address maintained in the GUS records/ on the user's updated account on the Site. E-mail notices are deemed written notices for all purposes for which written notices may be required. E-mail notices are deemed received on the Business Day after transmission, if properly addressed to the intended recipient.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-4xl font-normal mb-6">
                  <span className="text-gray-700">18) CONTACT INFORMATION</span>
                </h2>
                <p className="mb-4">
                  If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us at info@gus.org.in. We will promptly rectify any information found to be incorrect. You can also speak to us at +91 [Phone Number] (Monday to Friday 10:00 hrs – 17:30 hrs IST).
                </p>
              </section>

              <p className="text-sm text-gray-500 mt-8">
                The headings used in these Terms of Use are for convenience only and have no legal or contractual effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
