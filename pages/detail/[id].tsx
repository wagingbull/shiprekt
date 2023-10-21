import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContractRead } from 'wagmi';
import cryptopunksData from '../../public/abis/cryptopunks.json';
import { Card, Container } from '@mantine/core';

interface DetailPageProps {
  detailId: number;
}

const DetailPage: NextPage<DetailPageProps> = () => {
  const router = useRouter();
  const detailId = Number(router.query.id);
  const cryptopunksContractAddress = '16F5A35647D6F03D5D3da7b35409D65ba03aF3B2';
  const loadingMessage = 'Loading Cryptopunk attributes...';
  const titleMessage = `Cryptopunk ${detailId} Attributes:`;

  const {
    data: svgData,
    isError: isSvgError,
    isLoading: isSvgLoading,
  } = useContractRead({
    address: `0x${cryptopunksContractAddress}`,
    abi: cryptopunksData,
    functionName: 'punkImageSvg',
    args: [detailId],
  });

  const {
    data: attributeData,
    isError: isAttributeError,
    isLoading: isAttributeLoading,
  } = useContractRead({
    address: `0x${cryptopunksContractAddress}`,
    abi: cryptopunksData,
    functionName: 'punkAttributes',
    args: [detailId],
  });

  const attributeArray: string[] = (attributeData as string)?.split(',');
  const renderedAttributes = attributeArray?.map((value, index) => (
    <div key={index}>{value}</div>
  ));

  const svgHtml =
    typeof svgData === 'string'
      ? svgData.replace('data:image/svg+xml;utf8,', '')
      : '';

  return (
    <Container size="xs" px="xs">
      {(isSvgLoading || isAttributeLoading) && <div>{loadingMessage}</div>}

      {!isSvgLoading &&
        !isAttributeLoading &&
        !isSvgError &&
        !isAttributeError && (
          <Card>
            <div
              style={{ width: 250 }}
              dangerouslySetInnerHTML={{ __html: svgHtml }}
            />

            <h2>{titleMessage}</h2>
            {renderedAttributes}
          </Card>
        )}
    </Container>
  );
};

export default DetailPage;
