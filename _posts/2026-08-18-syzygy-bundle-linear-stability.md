---
layout: paper
title: "An answer for a Mistretta-Stoppino's conjecture"
title_ja: "Mistretta--Stoppino予想への一つの解答"
authors: "Erick Luna"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study the relation between linear stability of generated linear series on smooth curves and slope stability of their associated syzygy bundles. Motivated by conjectures of Mistretta and Stoppino, we establish new cases in which linear stability implies slope stability, focusing first on generated linear series over general curves and then on curves lying on polarized K3 surfaces. In the case of general curves, we use Brill-Noether-theoretic arguments to relate the numerical conditions on the linear series to the semi-stability of the syzygy bundle. For curves on K3 surfaces, we combine Lazarsfeld-Mukai bundles with Bridgeland stability conditions and restriction techniques to obtain slope-stability results under explicit degree bounds. These results provide further evidence for the expected equivalence between linear stability of linear series and slope stability of syzygy bundles.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - positivity
arxiv_id: "2608.16809v1"
arxiv_url: "https://arxiv.org/abs/2608.16809"
arxiv_submitted: "2026-08-17"
arxiv_updated: "2026-08-17"
summary: >-
  滑らかな曲線上の生成線形系の線形安定性が、付随するsyzygy bundleの傾き安定性を導く条件を調べる。
  一般曲線ではBrill--Noether理論を、偏極K3曲面上の曲線ではLazarsfeld--Mukai束とBridgeland安定性を用いて、Mistretta--Stoppino予想の新しい成立範囲を与える。
abstract_en: ""
summary_en: >-
  The article compares linear stability of generated linear series on smooth curves with slope stability of their kernel bundles. For general curves it proves the expected equivalence under a cohomological codimension condition. For curves cut out by a polarized K3 surface, it derives slope stability from linear stability under explicit genus, rank, degree, and divisibility assumptions. The arguments use Brill--Noether estimates in the first setting and Lazarsfeld--Mukai bundles, Bridgeland stability, and restriction in the second.
abstract_ja: >-
  滑らかな曲線上の生成線形系と、それに付随するsyzygy bundleについて、線形安定性と傾き安定性の関係を研究する。一般曲線に対しては不完全線形系を含む新しい同値条件を示す。偏極K3曲面上の曲線に対しては、明示的な次数上界のもとで線形安定性からsyzygy bundleの傾き安定性が従うことを証明する。
abstract_source_url: "https://arxiv.org/abs/2608.16809"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.16809](https://arxiv.org/abs/2608.16809)
- **著者:** Erick Luna
- **初回投稿日:** 2026年8月17日
- **最終更新日:** 2026年8月17日（v1）
- **主分類・副分類:** math.AG（主分類。副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな射影曲線 $C$ 上の生成線形系 $(L,V)$ には、評価写像の核としてsyzygy bundle $M_{V,L}$ が付随する。線形系の線形安定性と、このベクトル束の傾き安定性がいつ一致するかがMistretta--Stoppino予想の問題である。

本論文は二つの設定を扱う。第一は一般曲線上の不完全線形系で、切断空間における $V$ の余次元を $h^1(L)$ で抑える条件のもと、線形（半）安定性とsyzygy bundleの傾き（半）安定性の同値を得る。

第二は偏極K3曲面の超平面切断曲線である。Lazarsfeld--Mukai束を曲面上で調べ、Bridgeland安定性と制限定理を用いることで、次数の明示的範囲内で線形安定性が $M_{V,L}$ の傾き安定性を導くことを示す。

## 背景と問題設定

$\dim V=r+1$ で $V$ が $L$ を生成するとき、syzygy bundleは完全列

$$
0\longrightarrow M_{V,L}\longrightarrow V\otimes\mathcal O_C
\longrightarrow L\longrightarrow0
$$

で定義される。Mistretta--Stoppinoの予想は、$C$ のgonalityを $k$ として $d=\deg L\le kr$ の範囲で、$(L,V)$ の線形（半）安定性と $M_{V,L}$ の傾き（半）安定性が同値になると主張する。論文は一般曲線とK3曲面上の曲線でこの予想を前進させる。

## 主結果

### 一般曲線の場合（Corollary 1.1）

$C$ を種数 $g\ge2$ の一般曲線、$(L,V)$ を型 $(d,r+1)$ の生成線形系とし、

$$
\operatorname{codim}_{H^0(L)}V\le h^1(L)
$$

を仮定する。このとき $(L,V)$ が線形（半）安定であることと、$M_{V,L}$ が傾き（半）安定であることは同値である。不完全線形系 $V\subsetneq H^0(L)$ を含む点が重要である。

### K3曲面上の曲線の場合（Proposition 1.1）

偏極K3曲面 $(X,H)$ が、任意の曲線類 $D$ に対して $H^2$ が $H\cdot D$ を割るという数値条件を満たすとする。$C\in|H|$ を種数 $g>2$ の曲線、$(L,V)$ を型 $(d,r+1)$ の生成線形系とし、$k$ を $C$ のgonalityとする。

$$
1<r<d\le\min\{g-1,kr\}
$$

のもとで、$(L,V)$ が線形安定なら $M_{V,L}$ は傾き安定である。Introductionでは、対応するLazarsfeld--Mukai束の $H$-Gieseker安定性をまず示し、その曲線への制限を制御する流れが説明されている。

## 証明の見取り図

一般曲線では、想定される不安定化部分束をButler diagramとBrill--Noether数で解析する。一般性から得られる次数と切断数の制約が部分束の傾きを押さえ、線形部分系列の安定性へ戻す。

K3曲面の場合は $(L,V)$ にLazarsfeld--Mukai束を対応させ、曲面上のBridgeland安定性条件を利用してGieseker安定性を確立する。その後、次数上界を使う制限定理により、曲線上のsyzygy bundleの傾き安定性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.16809](https://arxiv.org/abs/2608.16809)
- **Introduction:** Section 1
- **Introduction中で言及された主要結果番号:** Conjecture 1.1, Conjecture 1.2, Corollary 1.1, Proposition 1.1
- **論文構成の説明:** IntroductionからSection 2への導入
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
