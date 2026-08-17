---
layout: paper
title: "Intermediate Pseudoconvexity of Fiber Bundles"
title_ja: "ファイバー束の中間擬凸性"
authors: "Masanori Adachi, Seungjae Lee, Aeryeong Seo"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.DG
arxiv_abstract: >-
  In this paper, we investigate the pseudoconvexity of locally trivial holomorphic ball bundles over
  compact Riemann surfaces of genus $\geq 2$, as well as the intermediate pseudoconvexity of their
  complements in the associated projective space bundles. Inspired by Brunella's work, we prove that
  any such ball bundle is $1$-convex, while its complement is $n$-convex, where $n$ denotes the
  dimension of the ball fiber, provided that the bundle admits a harmonic section with a regular
  point.
topic: several-complex-variables
tags:
  - stein-geometry
arxiv_id: "2606.15533v1"
arxiv_url: "https://arxiv.org/abs/2606.15533v1"
arxiv_submitted: "2026-06-14"
arxiv_updated: "2026-06-14"
summary: >-
  種数2以上のコンパクト Riemann 面上の正則球束を調べる。正則点をもつ調和切断の存在から、球束の 1-凸性と付随射影空間束内の補集合の最適な中間擬凸性を導く。
abstract_en: ""
summary_en: >-
  The article studies holomorphic bundles with unit-ball fiber over compact Riemann surfaces of genus at least two. A harmonic section that is regular somewhere yields leafwise positive curvature on the CR normal line bundle of the boundary foliation. This positivity produces a 1-convex exhaustion of the ball bundle and an n-convex exhaustion of its complement in the associated projective-space bundle. For fiber dimension at least two, the latter convexity degree is shown to be optimal.
abstract_ja: >-
  種数2以上のコンパクト Riemann 面上の局所自明な正則 $\mathbb B^n$-束と、付随する $\mathbb{CP}^n$-束内でのその補集合を扱う。束が正則点をもつ調和切断を備えるなら、境界葉層の CR 法線線束に葉方向正曲率計量が存在する。これを用いて球束が 1-凸、補集合が $n$-凸であり、$n\ge2$ では補集合が $(n-1)$-凸でないことを示す。
abstract_source_url: "https://arxiv.org/abs/2606.15533v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2606.15533v1](https://arxiv.org/abs/2606.15533v1)
- **著者:** Masanori Adachi, Seungjae Lee, Aeryeong Seo
- **初回投稿日・最終更新日:** 2026年6月14日（確認した v1）
- **主分類・副分類:** math.CV; math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

局所的には擬凸な正則円板束でも、大域的には Stein、1-凸、あるいは擬凸領域で尽くせないなど多様な挙動を示す。本論文はファイバーを単位球 $\mathbb B^n$ に広げ、球束自身と付随射影空間束内の補集合を同時に調べる。

基底は種数2以上のコンパクト Riemann 面で、正則点をもつ調和切断を仮定する。まず境界の水平葉層に沿って CR 法線線束が正曲率計量をもつことを示し、Brunella 型構成で exhaustion を作る。

その結果、球束は 1-凸、補集合は $n$-凸になる。$n\ge2$ では補集合が $(n-1)$-凸でないことも示すので、中間擬凸性の次数は鋭い。

## 背景と問題設定

$E$ を $\Sigma$ 上の $\mathbb B^n$-束、$\widehat E$ を付随 $\mathbb{CP}^n$-束、$E'=\widehat E\setminus\overline E$ とする。平坦構造は $\partial E$ 上に Riemann 面による水平葉層 $\mathcal F$ を定め、その CR 法線線束を
$$
N=\left.T_{\widehat E}^{1,0}\right|_{\partial E}/T_{\partial E}^{1,0}
$$
と書く。$q$-凸性は、コンパクト集合の外で Levi 形式の非正固有値が高々 $q-1$ 個となる滑らかな exhaustion の存在で測る。

## 主結果

### 葉方向正値性（Theorem 1.1）

$\Sigma$ の種数が2以上で、$E$ が正則点をもつ調和切断を備えるなら、$N$ は水平葉層 $\mathcal F$ に沿って正曲率をもつ滑らかな Hermite 計量を備える。

### 擬凸性の結論（Theorem 1.2）

同じ仮定の下で $E$ は 1-凸、$E'$ は $n$-凸である。さらに $n\ge2$ なら $E'$ は $(n-1)$-凸ではない。円板束の場合の既知結果を高次元球へ拡張するとともに、補集合の擬凹境界にもかかわらず得られる大域的な中間擬凸性を特定する。

## 証明の見取り図

調和切断から球の自己同型を用いた境界 defining function を構成し、その Levi 形式を水平葉方向に計算して $N$ の正曲率を得る。この葉方向正値性を Brunella 型の exhaustion に移し、$E$ と $E'$ に必要な数の正固有値を確保する。非 $(n-1)$-凸性は補集合の幾何から別に示される。

## 原論文との対応
- **Abstractページ:** [arXiv:2606.15533v1](https://arxiv.org/abs/2606.15533v1)
- **Introduction:** Section 1, pp. 1–3
- **主要定理:** Theorems 1.1, 1.2; Conjecture 1.3
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
