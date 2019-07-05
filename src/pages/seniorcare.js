import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Carousel, { Modal, ModalGateway } from 'react-images';
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'


  const siteTitle = 'Mark Olech'
  const siteDescription = 'Portfolio'


// class SeniorCare extends React.Component {
//   state = { modalIsOpen: false };
//   toggleModal = () => {
//     this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
//   };
//   render() {
//     const { modalIsOpen } = this.state;
//     return (
//       <Layout>
//         <Helmet>
//           <title>{siteTitle}</title>
//           <meta name="description" content={siteDescription} />
//         </Helmet>
//         <ModalGateway>
//         {modalIsOpen ? (
//           <Modal onClose={this.toggleModal}>
//             <Carousel views={images} />
//           </Modal>
//         ) : null}
//        </ModalGateway>

//       </Layout>
//     )
//   }
// }

const images = [{ src: thumb01 }, { src: thumb02 }];

class SeniorCare extends React.Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}

export default SeniorCare