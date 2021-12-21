import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Navigation,
  AlbumMainHeader,
  AlbumMainTimeline,
} from '@components/domain';
import { getAlbumMainDiaries } from '@api/getAlbumMainDiaries';
import { getAlbumTitleInfo } from '@api/albumApi';
import { useSelector } from 'react-redux';

const AlbumMainPage = () => {
  const { albumId } = useParams();
  const [state, setState] = useState([]);
  const [headerInfo, setHeaderInfo] = useState();
  const role = useSelector((state) => state.member.data.memberRole);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const data = await getAlbumMainDiaries({ albumId });

        setState(data);
      } catch (e) {
        console.log(e.response.data.message);
      }
    };

    const fetchAlbumTitleInfo = async () => {
      try {
        const data = await getAlbumTitleInfo({ albumId });
        setHeaderInfo(data);
      } catch (e) {
        console.log(e.response.data.message);
      }
    };

    fetchDiaries();
    fetchAlbumTitleInfo();
  }, [albumId]);

  if (state.length === 0) return null;

  return (
    <>
      <AlbumMainHeader
        albumName={headerInfo.title}
        familyMotto={headerInfo.familyMotto}
        role={role}
      />
      <AlbumMainTimeline diaries={state.diaries} />
      <Navigation />
    </>
  );
};

export default AlbumMainPage;
