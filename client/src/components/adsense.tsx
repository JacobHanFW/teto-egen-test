import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;                      // 애드센스 ‘광고 단위 ID’
  adFormat?: string;                   // ex) 'auto', 'rectangle', 'horizontal'
  fullWidthResponsive?: boolean;       // 반응형 여부
  className?: string;
}

/** 페이지 어디서든 광고 박스를 넣을 때 쓰는 컴포넌트 */
export function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = '',
}: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6057881489235789"      // 본인 퍼블리셔 ID
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  );
}

/** 애드센스 스크립트를 ‘한 번만’ 로드하는 컴포넌트 */
export function AdSenseScript() {
  useEffect(() => {
    // 이미 삽입돼 있으면 다시 넣지 않음
    if (document.querySelector('script[data-adsbygoogle]')) return;

    const script = document.createElement('script');
    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6057881489235789';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.adsbygoogle = 'true';            // 중복 삽입 체크용
    document.head.appendChild(script);
  }, []);

  return null;                                      // 렌더링 없음
}
