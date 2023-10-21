import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, Container, Grid, Button } from '@mantine/core';

interface CryptoPunk {
  tokenId: string;
  metadata: {
    svg: string;
    traits: { id: string }[];
  };
}

interface GetInventoryResponse {
  punks: CryptoPunk[];
}

const InventoryPage: NextPage = () => {
  const [punks, setPunks] = useState<CryptoPunk[]>([]);
  const [filteredPunks, setFilteredPunks] = useState<CryptoPunk[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState<
    'male' | 'female' | 'all'
  >('all');

  const router = useRouter();
  const walletId = router.query.address as string;
  const loadingMessage = 'Loading Cryptopunks...';
  const emptyMessage = `No Cryptopunks for wallet: ${walletId}.`;
  const titleMessage = `Cryptopunks Inventory for ${walletId}:`;
  const filteredEmptyMessage = 'All Cryptopunks are hidden by filters.';

  const isValidETHAddress = (value: string): boolean => {
    return /^(0x)?[0-9a-fA-F]{40}$/.test(value);
  };

  useEffect(() => {
    if (!walletId || !isValidETHAddress(walletId)) {
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`/api/inventory/${walletId}`)
      .then(response => response.json())
      .then((data: GetInventoryResponse) => {
        console.log('API response:', data);
        setPunks(data.punks);
        setFilteredPunks(data.punks);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching inventory:', error);
        setLoading(false);
      });
  }, [walletId]);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredPunks(punks);
    } else {
      const filtered = punks.filter(punk => {
        return punk.metadata.traits.some(trait => trait.id === selectedFilter);
      });
      setFilteredPunks(filtered);
    }
  }, [selectedFilter, punks]);

  const handleFilterChange = (filter: 'male' | 'female' | 'all') => {
    setSelectedFilter(filter);
  };

  return (
    <Container size="xs" px="xs">
      {loading ? (
        <p>{loadingMessage}</p>
      ) : (
        <>
          {punks && punks.length === 0 ? (
            <p>{emptyMessage}</p>
          ) : (
            <Grid gutter="lg">
              <div>
                <Button
                  onClick={() => handleFilterChange('all')}
                  variant={selectedFilter === 'all' ? 'outline' : 'light'}
                >
                  All
                </Button>
                <Button
                  onClick={() => handleFilterChange('male')}
                  variant={selectedFilter === 'male' ? 'outline' : 'light'}
                >
                  Male
                </Button>
                <Button
                  onClick={() => handleFilterChange('female')}
                  variant={selectedFilter === 'female' ? 'outline' : 'light'}
                >
                  Female
                </Button>
              </div>

              <h2>{titleMessage}</h2>

              {filteredPunks && filteredPunks.length > 0 ? (
                filteredPunks.map(punk => (
                  <div key={punk.tokenId}>
                    <Link href={`/detail/${punk.tokenId}`}>
                      <Card mx="xl">
                        <div
                          style={{ width: 150 }}
                          dangerouslySetInnerHTML={{
                            __html: punk.metadata.svg.replace(
                              'data:image/svg+xml;utf8,',
                              ''
                            ),
                          }}
                        />
                        {punk.metadata.traits.map(trait => (
                          <div key={trait.id}>{trait.id}</div>
                        ))}
                      </Card>
                    </Link>
                  </div>
                ))
              ) : (
                <p>{filteredEmptyMessage}</p>
              )}
            </Grid>
          )}
        </>
      )}
    </Container>
  );
};

export default InventoryPage;
