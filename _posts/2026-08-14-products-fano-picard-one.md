---
layout: paper
title: "Classification of products of Fano varieties with Picard number one"
title_ja: "Picard 数1の Fano 多様体の積の分類"
authors: "Arijit Mukherjee"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
tags:
  - fano-varieties
arxiv_id: "2608.12076v1"
arxiv_url: "https://arxiv.org/abs/2608.12076"
arxiv_submitted: "2026-08-12"
arxiv_updated: "2026-08-12"
summary: >-
  整数の分割から作る多重射影空間、より一般に各次元で固定した Picard 数1の Fano 多様体の積を分類する。閉曲線錐の極端収縮から因子の次元を復元し、異なる分割に対応する積が非同型であることを統一的に示す。
abstract_en: ""
summary_en: >-
  The paper classifies certain products indexed by partitions of a fixed total dimension. It first gives a uniform proof that distinct partitions produce non-isomorphic multiprojective spaces. The argument reads the factors from extremal contractions of the closed cone of curves rather than treating partitions of equal and unequal length separately. The method extends to products formed from one fixed Picard-rank-one Fano variety in each dimension and yields, among other examples, a classification of products of smooth quadrics of dimension at least three.
abstract_ja: >-
  正整数 $n$ の分割に対応する多重射影空間を、閉曲線錐の極端収縮を用いて分類する。異なる分割から得られる多重射影空間は非同型であり、この証明は分割の長さによる場合分けを必要としない。同じ方法を、各次元で一つ固定した Picard 数1の Fano 多様体の積へ拡張し、異なる分割が非同型な積を与えることを示す。応用として次元3以上の滑らかな二次超曲面の積を分類する。
abstract_source_url: "https://arxiv.org/abs/2608.12076"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2608.12076](https://arxiv.org/abs/2608.12076)
- **著者:** Arijit Mukherjee
- **初回投稿日・最終更新日:** 2026年8月12日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正整数 $n$ の分割 $(n_1,\ldots,n_r)$ は多重射影空間 $\mathbb P^{n_1}\times\cdots\times\mathbb P^{n_r}$ を定める。異なる分割が非同型な多様体を与えることは既知だが、従来の証明は分割の長さで場合分けするか、表現論を用いていた。

本論文は Mori 理論の閉曲線錐と極端収縮を用いる統一的な証明を与える。積の各射影は閉曲線錐の特定の面の収縮として内在的に認識でき、その標的の次元から元の分割を読み戻せる。

この機構は射影空間に固有ではない。各次元 $d$ で Picard 数1の Fano 多様体 $F_1^d$ を一つ固定すれば、分割に沿った積も異なる分割ごとに互いに非同型になる。

応用には Grassmann 多様体の積、次元3以上の滑らかな二次超曲面の積、曲線上の固定行列式安定束のモジュライ空間の積が含まれる。Abstract と Introduction は、閉曲線錐が積分解を記録することを本論文の新しい統一原理として強調する。

## 背景と問題設定

Picard 数1という仮定により各因子の曲線錐は一本の半直線になり、積の閉曲線錐の極端方向と射影が対応する。Fano 性は反標準因子の正値性を通じ、Cone theorem と収縮定理を適用して必要な極端収縮を存在させる。

## 主結果

### 多重射影空間の分類
Introductionでは概略として次のように述べられている。$n$ の相異なる二つの分割 $(m_1,\ldots,m_r)$ と $(n_1,\ldots,n_s)$ に対し、

$$
\mathbb P^{m_1}\times\cdots\times\mathbb P^{m_r}
\not\cong
\mathbb P^{n_1}\times\cdots\times\mathbb P^{n_s}.
$$

### Picard 数1の Fano 因子への拡張
各 $d$ に対して複素次元 $d$、Picard 数1の Fano 多様体 $F_1^d$ を固定する。このとき異なる分割に対応する

$$
F_1^{m_1}\times\cdots\times F_1^{m_r}
\quad\text{と}\quad
F_1^{n_1}\times\cdots\times F_1^{n_s}
$$

は互いに非同型である。特に各因子を次元3以上の滑らかな二次超曲面とする積が分類される。

## 証明の見取り図

多重射影空間では nef 錐を各因子の $\mathcal O(1)$ の引き戻しが張る錐として計算し、その双対である閉曲線錐の面を調べる。各面の極端収縮は対応する因子への射影であり、同型はこの収縮データを保存するので分割が復元される。一般の Fano 因子では Kodaira 消滅、Cone theorem、Picard 数1を用いて同じ射影の内在的特徴づけを得る。

## 原論文との対応
- **Abstractページ:** [arXiv:2608.12076](https://arxiv.org/abs/2608.12076)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 3.5, 3.13; Corollary 3.14
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
