import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'components/button/button';
import { nanoid } from 'nanoid';
import { Desktop, TabletOrMobile } from 'components/mq'
import Empty from 'components/empty/empty';
import Scroller from 'components/scroller/scroller';
import Dropzone from 'components/dropzone/dropzone';
import Title from 'components/title/title';
import PersonList from './person-list';
import PersonImage from './person-image';
import PersonThumbList from './person-thumb-list';
import PersonThumb from './person-thumb';
import PersonCard from './person-card';
import styles from './person-container.module.scss';

const PersonContainer = ({ className, uploadStatus, searchStatus }) => {
  const componentClasses = classNames(styles.container, className);
  // const [uploadStatus, setUploadStatus] = useState('uploaded'); // empty process uploaded uploaded-without-face
  // const [searchStatus, setSearchStatus] = useState('found'); // wait not-found process found

  const thumbs = [
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    },
    {
      id: nanoid(),
      src: 'https://via.placeholder.com/112',
    }
  ]

  const persons = [
    {
      id: nanoid(),
      avatar: 'https://via.placeholder.com/72',
      name: 'Leonardo DiCaprio asdadsasdasd asd asd dsa',
      link: '',
      quest: 'ok',
      socials: [
        { name: 'instagram', link: '', id: nanoid() },
        { name: 'facebook', link: '', id: nanoid() },
        { name: 'vkontakte', link: '', id: nanoid() },
        { name: 'twitter', link: '', id: nanoid() },
        { name: 'tiktok', link: '', id: nanoid() },
        { name: 'wiki', link: '', id: nanoid() },
        { name: 'kinopoisk', link: '', id: nanoid() }
      ]
    },
    {
      id: nanoid(),
      avatar: 'https://via.placeholder.com/72',
      name: 'Eric Holmes',
      link: '',
      quest: '',
      socials: [
        { name: 'instagram', link: '', id: nanoid() },
        { name: 'facebook', link: '', id: nanoid() },
        { name: 'vkontakte', link: '', id: nanoid() },
        { name: 'twitter', link: '', id: nanoid() },
        { name: 'tiktok', link: '', id: nanoid() },
        { name: 'wiki', link: '', id: nanoid() },
        { name: 'kinopoisk', link: '', id: nanoid() }
      ],
    },
    {
      id: nanoid(),
      avatar: 'https://via.placeholder.com/72',
      name: 'Eric Holmes',
      link: '',
      quest: '',
      socials: [
        { name: 'instagram', link: '', id: nanoid() },
        { name: 'facebook', link: '', id: nanoid() },
        { name: 'vkontakte', link: '', id: nanoid() },
        { name: 'twitter', link: '', id: nanoid() },
        { name: 'tiktok', link: '', id: nanoid() },
        { name: 'wiki', link: '', id: nanoid() },
        { name: 'kinopoisk', link: '', id: nanoid() }
      ],
    },
    {
      id: nanoid(),
      avatar: 'https://via.placeholder.com/72',
      name: 'Juan Harris',
      link: '',
      quest: '',
      socials: [
        { name: 'instagram', link: '', id: nanoid() },
        { name: 'facebook', link: '', id: nanoid() },
        { name: 'vkontakte', link: '', id: nanoid() },
        { name: 'twitter', link: '', id: nanoid() },
        { name: 'tiktok', link: '', id: nanoid() },
      ]
    },
    {
      id: nanoid(),
      avatar: 'https://via.placeholder.com/72',
      name: 'Adrian Fernandez',
      link: '',
      quest: '',
      socials: [
        { name: 'instagram', link: '', id: nanoid() },
        { name: 'facebook', link: '', id: nanoid() },
      ]
    },
    {
      id: nanoid(),
      avatar: 'https://via.placeholder.com/72',
      name: 'Mark Gross',
      link: '',
      quest: '',
      socials: [
        { name: 'instagram', link: '', id: nanoid() },
      ]
    },
    {
      id: nanoid(),
      avatar: 'https://via.placeholder.com/72',
      name: 'Christopher Frazier',
      link: '',
      quest: '',
      socials: [
        { name: 'instagram', link: '', id: nanoid() },
      ]
    }
  ]

  return (
    <div className={componentClasses}>
      <TabletOrMobile>
        <Title text="Find public people by photo" />
      </TabletOrMobile>
      <div className="row">
        <div className="col-mobile-12 col-desktop-8 flex">
          <section className={styles.section}>
            {
              uploadStatus === 'uploaded' && (
                <PersonImage className={styles.image} src="https://via.placeholder.com/760x358" />
              )
            }
            {
              uploadStatus === 'uploaded-without-face' && (
                <PersonImage className={styles.image} src="https://via.placeholder.com/760x358" />
              )
            }
            {
              (uploadStatus === 'empty' || uploadStatus === 'process') && (
                <Dropzone className={styles.dropzone} />
              )
            }
            <Scroller direction="horizontal" className={styles['thumbs-scroller']}>
              {
                uploadStatus !== 'uploaded-without-face' ? (
                  <PersonThumbList>
                    {
                      thumbs.map(({ id, src }) => (
                        <PersonThumb key={id} src={src} />
                      ))
                    }
                  </PersonThumbList>
                ) : (
                  <PersonThumbList>
                    <PersonThumb empty />
                  </PersonThumbList>
                )
              }
            </Scroller>
            <Desktop>
              <Button text="Upload photo to find person" iconName="upload" full className={classNames(styles.button)} color="primary" />
            </Desktop>
            <TabletOrMobile>
              <Button text="Upload photo" iconName="upload" full className={classNames(styles.button)} color="primary" />
            </TabletOrMobile>
          </section>
        </div>
        <div className="col-mobile-12 col-desktop-4 flex">
          <aside className={styles.side}>
            {
              searchStatus === 'found' && (
                <Scroller direction="vertical" className={styles['side-scroller']}>
                  <PersonList>
                    {
                      persons.map(({ id, name, link, socials, quest, avatar }) => (
                        <PersonCard key={id} name={name} link={link} socials={socials} avatar={avatar} quest={quest}  />
                      ))
                    }
                  </PersonList>
                </Scroller>
              )
            }
            {
              searchStatus === 'not-found' && (
                <Empty text="Oops, no results found..." />
              )
            }
            {
              (searchStatus === 'process' || searchStatus === 'wait') && (
                <div className={styles['loading-text']}>Search results...</div>
              )
            }
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PersonContainer;

PersonContainer.propTypes = {
  className: PropTypes.string,
  uploadStatus: PropTypes.string,
  searchStatus: PropTypes.string
};

PersonContainer.defaultProps = {
  className: '',
  uploadStatus: 'uploaded',
  searchStatus: 'found'
};
