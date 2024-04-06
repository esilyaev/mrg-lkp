// COMPONENTS
import { MRSidebar } from '../widgets/MRSidebar'
import { MRFilterButton } from '../widgets/Contracts/MRFilterButton'
// MUI
import Box from '@mui/material/Box'
import DoneIcon from '@mui/icons-material/Done'
import GridOnIcon from '@mui/icons-material/GridOn'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

import { rows } from 'widgets/Contracts/mockContracts'
import { useMemo, useState } from 'react'
import { ContractsList } from '../widgets/Contracts/ContractsList'
import { Button } from '@mui/material'
import { MRHeader } from '../comps/MRHeader'

export enum ViewType {
  CARD,
  TABLE,
}

enum ContractsFilter {
  ALL,
  REVIEW,
  CONTROL,
  CLOSE,
}

export const ContractsPage = () => {
  const [filter, setFilter] = useState(ContractsFilter.ALL)
  const [view, setView] = useState(ViewType.CARD)

  const filteredContracts = useMemo(() => {
    switch (filter) {
      case ContractsFilter.ALL:
        return rows

      case ContractsFilter.CLOSE:
        return rows.filter(item => item.status === 'Закрыт')

      case ContractsFilter.REVIEW:
        return rows.filter(item => item.status === 'Согласование')

      case ContractsFilter.CONTROL:
        return rows.filter(item => item.status === 'Контроль')

      default:
        return rows
    }
  }, [filter])

  return (
    <>
      <MRSidebar />
      <section>
        <Box>
          <MRHeader title="Контракты" select="Все проекты" />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                background: '#fff',
                borderRadius: '6px',
              }}
            >
              <Box
                sx={{
                  color: '#fff',
                  background: 'rgba(42, 41, 46, 1)',
                  borderRadius: '6px 0px 0px 6px',
                  minWidth: '124px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  borderRight: '1px solid rgba(245, 245, 245, 1)',
                }}
                onClick={() => {
                  setFilter(ContractsFilter.ALL)
                }}
              >
                <MRFilterButton name="Все проекты" startIcon={<DoneIcon />} />
              </Box>
              <Box
                sx={{
                  color: 'rgba(156, 154, 165, 1)',
                  minWidth: '124px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  borderRight: '1px solid rgba(245, 245, 245, 1)',
                }}
                onClick={() => {
                  setFilter(ContractsFilter.REVIEW)
                }}
              >
                <MRFilterButton name="Согласование" startIcon={<none />}  />
              </Box>
              <Box
                sx={{
                  color: 'rgba(156, 154, 165, 1)',
                  minWidth: '124px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  borderRight: '1px solid rgba(245, 245, 245, 1)',
                }}
                onClick={() => {
                  setFilter(ContractsFilter.CONTROL)
                }}
              >
                <MRFilterButton name="Контроль" startIcon={<none />}  />
              </Box>
              <Box
                sx={{
                  color: 'rgba(156, 154, 165, 1)',
                  minWidth: '124px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                }}
                onClick={() => {
                  setFilter(ContractsFilter.CLOSE)
                }}
              >
                <MRFilterButton name="Закрыт" startIcon={<none />}  />
              </Box>
            </Box>

            <div>
              <Button
                sx={{
                  background: '#fff',
                  borderRadius: '6px 0 0 6px',
                  minWidth: '40px',
                  width: '40px',
                  height: '40px',
                }}
                onClick={() => setView(ViewType.CARD)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GridOnIcon
                    sx={{
                      fill: '#000',
                      width: '20px',
                    }}
                  />
                </Box>
              </Button>

              <Button
                sx={{
                  background: '#fff',
                  borderRadius: '0 6px 6px 0',
                  minWidth: '40px',
                  width: '40px',
                  height: '40px',
                }}
                onClick={() => setView(ViewType.TABLE)}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FormatListBulletedIcon
                    sx={{
                      fill: '#000',
                      width: '20px',
                    }}
                  />
                </Box>
              </Button>
            </div>
          </Box>

          <ContractsList viewType={view} rows={filteredContracts} />
        </Box>
      </section>
    </>
  )
}
