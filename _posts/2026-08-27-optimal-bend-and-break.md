---
layout: paper
title: "Optimal bounds in Bend-and-Break"
title_ja: "Bend-and-Breakの最適評価"
authors: "Eric Jovinelly, Brian Lehmann, Eric Riedl"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We improve the Bend-and-Break result of Miyaoka and Mori by establishing the optimal degree bound. Our result
  also yields optimal bounds on lengths of extremal rays of log canonical pairs.
topic: algebraic-geometry
tags:
  - birational-geometry
  - minimal-model-program
arxiv_id: "2509.08065v2"
arxiv_url: "https://arxiv.org/abs/2509.08065"
arxiv_submitted: "2025-09-09"
arxiv_updated: "2026-01-08"
summary: >-
  Miyaoka–MoriのBend-and-Breakに現れる次数評価を最適定数 $\dim X+1$ まで改善する。複数の固定点をもつ曲線族から同数の有理曲線を切り離すBend-
  and-Shatterを導入し、lc対の負の端射線の長さにも最適評価を与える。
abstract_en: ""
summary_en: >-
  The authors sharpen bend-and-break for curves on projective varieties over arbitrary algebraically closed
  fields. Their bound produces a rational curve through a prescribed point with degree controlled by the ratio
  of a nef divisor degree to the negative canonical degree. Applications give dimension-sharp length bounds for
  negative extremal faces of dlt pairs and rays of lc pairs.
abstract_ja: >-
  Miyaoka–MoriのBend-and-Breakを改良して最適な次数上界を確立し、その応用としてlog canonical対の端射線の長さにも最適上界を与える。
abstract_source_url: "https://arxiv.org/abs/2509.08065"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---
## 書誌情報

- **arXiv:** [arXiv:2509.08065](https://arxiv.org/abs/2509.08065)
- **著者:** Eric Jovinelly, Brian Lehmann, Eric Riedl
- **主分類:** math.AG
- **ライセンス:** arXiv non-exclusive distribution license

## 要約

Bend-and-Breakは変形する曲線から有理曲線成分を取り出すMori理論の基本手段である。従来のMiyaoka–Mori評価に現れる $2\dim X$ を最適値 $\dim X+1$ へ改善する。

鍵は、$k$ 個の点を固定する $k$ 次元の写像族が退化すると、各固定点に対応する $k$ 個の非定値な有理曲線の木を切り離すというBend-and-Shatterである。これを正標数でのFrobeniusと標数零へのspread-outに組み込む。

## 背景と問題設定

射影多様体 $X$ の滑らかな部分にある曲線 $C$ が $K_X\cdot C<0$ を満たすとき、指定点を通る低次数有理曲線を構成したい。精密な次数は端射線の長さを支配し、錐定理や収縮理論の定量部分に直結する。

## 主結果

### Theorem 1.1

任意標数の代数閉体上の射影多様体 $X$、nefな $\mathbb R$-Cartier因子 $H$、滑らかな部分に含まれる既約曲線 $C$ で $K_X\cdot C<0$ とする。各閉点 $x\in C$ を通る有理曲線 $R$ が存在し、

$$
H\cdot R\le (\dim X+1)\frac{H\cdot C}{-K_X\cdot C}
$$

を満たす。$X=\mathbb P^n$ と超平面因子により定数は最適である。

### Theorem 1.2

標数零のdlt対 $(X,\Delta)$ の負の端面の収縮 $\pi:X\to Z$ と、ファイバーの正次元既約成分 $F$ に対し、$F$ を掃く変形をもつ有理曲線 $C$ が端面内に存在し、

$$-(K_X+\Delta)\cdot C\le \dim F+1$$

となる。kltかつ双有理収縮なら不等号は狭義にできる。

### Theorem 1.3

lc対の各 $(K_X+\Delta)$-負端射線は、$-(K_X+\Delta)\cdot C\le\dim X+1$ を満たす有理曲線で生成される。

## 証明の見取り図

Bend-and-Shatterで固定点ごとに有理成分を作り、nef性から少なくとも一成分の次数を全次数の平均以下に抑える。正標数ではFrobenius反復で写像空間の次元を増大させ、標数零と実係数因子へ既存の還元を通じて移す。

## 原論文との対応

- **Abstractページ:** [arXiv:2509.08065](https://arxiv.org/abs/2509.08065)
- **Introduction:** Section 1, pp. 1–3
- **確認したarXivバージョン:** 2509.08065v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
