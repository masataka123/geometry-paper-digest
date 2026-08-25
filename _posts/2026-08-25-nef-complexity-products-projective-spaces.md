---
layout: paper
title: "Characterization of products of projective spaces via nef complexity"
title_ja: "nef複雑度による射影空間の積の特徴づけ"
authors: "Joshua Enwright, Stefano Filipazzi, Yoshinori Gongyo, Joaquín Moraga, Roberto Svaldi, Chengxi Wang, Kiwamu Watanabe"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We define the nef complexity of a projective variety $X$. This invariant compares $\dim X+ρ(X)$ with the sum of the coefficients of nef partitions of $-K_X$. We prove that the nef complexity is non-negative and it is zero precisely for products of projective spaces. We classify smooth Fano threefolds with nef complexity at most one. In a similar vein, we prove Mukai's conjecture for smooth Fano varieties for which every extremal contraction is of fiber type and study smooth images of products of projective spaces. Along the way, we answer positively a question of J. Starr regarding the nef cone of smooth Fano varieties.
topic: algebraic-geometry
tags:
  - fano-varieties
  - positivity
  - birational-geometry
arxiv_id: "2512.13637v1"
arxiv_url: "https://arxiv.org/abs/2512.13637v1"
arxiv_submitted: "2025-12-15"
arxiv_updated: "2025-12-15"
summary: >-
  反標準類のnef分解係数の総和と次元・Picard数を比較する「nef複雑度」を導入し、その非負性と零の場合の射影空間の積による特徴づけを証明する。一般化klt対に対する係数上界から、klt Fano多様体、滑らかなFano三次元多様体、Mukai予想、射影空間の積の滑らかな像へ応用を展開する。
abstract_en: >-
  
summary_en: >-
  The paper introduces nef complexity, an invariant built from numerical decompositions of the anticanonical class into nef Cartier divisors. It proves a sharp nonnegativity bound and identifies the equality case with products of projective spaces. The results also yield a low-complexity classification for smooth Fano threefolds and consequences for Mukai-type questions.
abstract_ja: >-
  射影多様体のnef複雑度を、$\dim X+\rho(X)$ と $-K_X$ のnef分割の係数和との差として定義する。この量が非負であり、零となるのが射影空間の積に限ることを示す。さらにnef複雑度が1以下の滑らかなFano三次元多様体を分類し、全ての端収縮がファイバー型であるFano多様体についてMukai予想を証明する。
abstract_source_url: "https://arxiv.org/abs/2512.13637v1"
license_name: "arXiv.org perpetual, non-exclusive license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2512.13637v1](https://arxiv.org/abs/2512.13637v1)
- **著者:** Joshua Enwright, Stefano Filipazzi, Yoshinori Gongyo, Joaquín Moraga, Roberto Svaldi, Chengxi Wang, Kiwamu Watanabe
- **初回投稿日・最終更新日:** 2025年12月15日
- **主分類:** math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影空間をFano多様体の中で特徴づける古典的問題に対し、本論文は射影空間の積を反標準類のnef分解から特徴づける。$-K_X$ を非自明なnef Cartier因子 $L_i$ の正係数和として数値的に分解できる係数総和の上限をtotal index $\tau_X$ とし、

$$c_X=\dim X+\rho(X)-\tau_X$$

をnef complexityと定義する。主結果は $c_X\geq0$ とし、等号なら $X$ が射影空間の積であることを示す。これは合理曲線族ではなく因子の数値分解だけによる特徴づけである。

より一般にgeneralized klt log Calabi–Yau対で係数和を抑え、その等号の場合を分類する。加えて滑らかなFano三次元多様体の $c_X\leq1$ の分類、特定のFano多様体に対するMukai予想、射影空間の積の滑らかな像の剛性も得る。

## 背景と問題設定

Mukai予想はFano指数 $i(X)$ に対し
$$\dim X+\rho(X)-i(X)\rho(X)\geq0$$
を予想し、等号の場合を同じ次元の射影空間の積として特徴づける。nef complexityは単一の指数を、反標準類の任意のnef分解へ置き換える不変量である。

## 主結果

### 主定理（Theorem 1.4 / Theorem 4.2）

正規射影多様体 $X$ 上で
$$K_X+\Delta+\sum_{i=1}^k m_iM_i\equiv0$$
とする。対がgeneralized klt、各 $M_i$ が非自明なnef Cartier因子、かつ $\Delta+\sum m_iM_i$ がbigなら
$$\sum_i m_i\leq\dim X+\rho(X)$$
が成り立つ。等号なら $X\simeq\prod_{j=1}^l\mathbb P^{t_j}$ である。特にklt Fano多様体では $c_X\geq0$ で、$c_X=0$ は射影空間の積を特徴づける。

### 次元だけによる上界（Theorem 1.6）

$-K_X\equiv\sum b_iM_i$ をもつklt Fano多様体では $\sum b_i\leq2\dim X$ であり、等号なら $X\simeq(\mathbb P^1)^{\dim X}$ である。

### Fano三次元多様体（Theorem 1.9）

滑らかなFano三次元多様体で $c_X<1$ なら $c_X=0$ で、$\mathbb P^3,\mathbb P^2\times\mathbb P^1,(\mathbb P^1)^3$ のいずれかである。$c_X=1$ の場合もIntroductionに列挙された五つの型に分類される。

## 証明の見取り図

まずnefかつbigなCartier因子 $L_1,\ldots,L_{n+1}$ に対して $K_X+\sum L_i$ がpseudo-effectiveになるFujita型定理を確立する。全ての $M_i$ がbigならKobayashi–Ochiai型議論で射影空間を得る。bigでない因子はファイブレーションを誘導するため、基底と一般ファイバーへ分解を移し、次元に関する帰納法で主定理へ到達する。

## 原論文との対応

- **Abstractページ:** [arXiv:2512.13637v1](https://arxiv.org/abs/2512.13637v1)
- **Introduction:** Section 1, pp. 1–7
- **主要結果:** Theorems 1.4, 1.6, 1.9, 1.12, 1.13
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
