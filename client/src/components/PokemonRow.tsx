import { memo } from 'react';
import { TableRow, TableCell, Typography, TableContainer, Table, TableBody, Paper } from '@mui/material';
import { Pokemon } from '@/app/interface/types';

const PokemonRow = ({ pokemon }: { pokemon: Pokemon }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <img
              src={pokemon.sprite}
              alt={pokemon.name}
              width={50}
              height={50}
            />
          </TableCell>
          <TableCell>
            <Typography variant="body1">{pokemon.name}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="body2">
              {pokemon.types.join(", ")}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export default memo(PokemonRow);
