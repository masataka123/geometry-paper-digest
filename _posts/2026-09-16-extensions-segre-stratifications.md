---
layout: paper
title: "Extensions and Segre stratifications over algebraic surfaces"
title_ja: "代数曲面上の拡大とSegre層別化"
authors: "Thomas Goller, Yinbang Lin"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We study two closely related topics over algebraic surfaces: stability of extensions of stable sheaves by stable sheaves, and maximal subsheaves of a given stable sheaf. For the former, we provide a construction of complete families of sheaves via extensions and prove the stability for some cases. The construction enables us to prove certain cases of Weak Brill--Noether over rational surfaces. The second topic leads to a refinement of the Segre stratification of the moduli of sheaves. We obtain the expected dimension of certain refined Segre strata over rational surfaces and K3 surfaces. Over the projective plane, we prove our main result that all refined Segre strata corresponding to line bundles are irreducible of the expected dimension and are nested under taking closures. As a consequence, we obtain more cases of the stability of extensions. Our results suggest that refined Segre strata behave much better than Brill--Noether strata. Our study of the refined Segre strata relies crucially on Bridgeland stability conditions and the work of Li and Zhao.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - moduli
arxiv_id: "2609.13684v1"
arxiv_url: "https://arxiv.org/abs/2609.13684"
arxiv_submitted: "2026-09-12"
arxiv_updated: "2026-09-12"
summary: >-
  代数曲面上で安定層どうしの拡大が安定になる条件と、安定層の極大部分層が定める精密化Segre層別を研究する。射影平面では線束に対応する各層が期待次元の既約集合であり、その閉包が入れ子になることを証明する。
abstract_en: ""
summary_en: >-
  This work studies extensions and maximal subsheaves of stable sheaves on algebraic surfaces within a common moduli-theoretic framework. It constructs complete families arising from extension classes and applies them to stability and weak Brill–Noether questions. A refined Segre stratification records discriminant data in addition to the usual invariant; on the projective plane, the strata associated with line subbundles are shown to have the expected geometry and ordered closure relations.
abstract_ja: >-
  安定層の短完全列を、拡大から中項を作る方向と、固定した中項の極大部分層を調べる方向の双方から研究する。拡大による完備族を構成して有理曲面上の安定性と弱Brill–Noether問題へ応用する。さらに判別式を加えたSegre層別を導入し、射影平面上で線束に対応する層の非空性、既約性、期待次元、閉包関係を決定する。
abstract_source_url: "https://arxiv.org/abs/2609.13684"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.13684](https://arxiv.org/abs/2609.13684)
- **著者:** Thomas Goller, Yinbang Lin
- **初回投稿日・最終更新日:** 2026年9月12日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな射影曲面上の短完全列

$$
0\longrightarrow F\longrightarrow E\longrightarrow G\longrightarrow0
$$

を中心に、安定な $F,G$ の一般拡大 $E$ が安定かという問題と、固定した安定層 $E$ の極大部分層を分類する問題を結び付ける。

拡大から得られる層の族がモジュライを局所的に覆うための完備性を証明し、有理曲面上の弱Brill–Noether性やLange型安定性へ応用する。後半では通常のSegre不変量を判別式で精密化し、部分層の型ごとの層別を扱う。

## 背景と問題設定

曲線上のLange予想ではSegre不変量が安定束の極大部分束を測る。曲面では同じ不変量だけでは層が一般に既約にならないため、部分層の判別式を同時に記録する必要がある。本論文は最小判別式をもつ極大部分層をSegre部分層と呼ぶ。

## 主結果

### 射影平面の精密化Segre層（Theorem 1.1）

$X=\mathbb P^2$、$e$ を正次元の半安定層モジュライ $M(e)$ をもつ階数正のクラスとする。Introductionで定義される整数 $k_e$ に対し、$k_e\le k<\mu(e)$ なら $\mathcal O(k)$-Segre層は非空かつ既約で、その余次元は $k>k_e$ のとき

$$
1-\chi(e(-k))
$$

である。さらにその閉包は $k\le j<\mu(e)$ の全ての $\mathcal O(j)$-Segre層を含む。一般点は明記された例外を除き安定で、一般拡大

$$
0\to\mathcal O(k)\to E\to G\to0
$$

として得られる。

### 完備拡大族と応用

$\operatorname{Hom}(G,F)=\operatorname{Ext}^2(G,F)=0$ の下で、単純な非自明拡大の自然な射影族が完備になる。これを用いて有理曲面上の弱Brill–Noether性と、傾きが近い安定層の拡大の安定性を得る。

## 証明の見取り図

相対QuotスキームとKodaira–Spencer写像により拡大族の完備性を示す。射影平面ではBridgeland壁越えと既知のモジュライ空間の双有理モデルを使い、各Segre層を一意の拡大成分として同定する。次元計算と変形を組み合わせて既約性と閉包の入れ子構造を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.13684](https://arxiv.org/abs/2609.13684)
- **Introduction:** Section 1, pp. 1–3
- **主要定理:** Theorem 1.1; Propositions 2.5, 2.6, 2.8
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
