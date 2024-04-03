

// MUI
import StarIcon from '@mui/icons-material/Star';
import { IconButton, Typography } from "@mui/material";
import Box from '@mui/material/Box';

export const MRCard = (props: { status: string, title: string, subtitle: string, summa: number, remain: number, date: string, }) => (
  <>

    <Box
      sx={{
        background: 'rgba(255, 255, 255, 1)',
        borderRadius: '15px',
        overflow: 'hidden',
      }}
    >
      <article className="card__content">


        <Box
          sx={{
            backgroundImage: 'url(/img/card-img.webp)',
            backgroundSize: 'cover',
            backgroundPosition: '50% 7%',
            minHeight: '200px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              padding: '16px',
              justifyContent: 'space-between',
            }}
          >

            <Box
              sx={{
                padding: '8px 12px',
                background: 'rgba(239, 238, 255, 1)',
                color: 'rgba(110, 70, 220, 1)',
                borderRadius: '100px',
              }}
            >{props.status}</Box>


            <Box
              sx={{
                width: '32px',
                height: '32px',
                background: 'rgba(239, 238, 255, 1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

              }}
            >
              <IconButton
                sx={{
                  // background: 'grey',
                }}>
                <StarIcon
                  sx={{
                    fill: 'rgba(117, 75, 233, 1)',
                  }} />
              </IconButton>

            </Box>

          </Box>

        </Box>

        <Box
          sx={{
            padding: '16px',
          }}>
          <Typography variant='h3'
            sx={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '500',
            }}
          >{props.title}</Typography>
          <Box sx={{
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '400',
          }}>{props.subtitle}</Box>
          <Box sx={{ marginTop: '16px', }}>


            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}>
              <Box
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(42, 41, 46, 1)',
                }}>Сумма</Box>
              <Box
                sx={{
                  color: 'rgba(107, 106, 114, 1)',
                }}
              >
                <span>{props.summa}</span>
              </Box>

            </Box>
            <Box sx={{}}></Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}>
              <Box
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(42, 41, 46, 1)',
                }}>Остаток</Box>
              <Box
                sx={{
                  color: 'rgba(107, 106, 114, 1)',
                }}
              >
                <span>{props.remain}</span>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}>
              <Box
                sx={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(42, 41, 46, 1)',
                }}>Дата</Box>
              <Box
                sx={{
                  color: 'rgba(107, 106, 114, 1)',
                }}
              >
                <span>{props.date}</span>
              </Box>
            </Box>



          </Box>

        </Box>
      </article>
    </Box>


  </>
);
