---
layout: paper
title: "A Remark on Stability Conditions on Smooth Projective Varieties"
title_ja: "滑らかな射影多様体上の安定性条件に関する注意"
authors: "Chunyi Li"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $X$ be a smooth projective variety over $\mathbb C$. In this paper, we prove that $\mathrm{D}^b(X)$, the bounded derived category of coherent sheaves on $X$, always admits stability conditions in the sense of Bridgeland.
topic: algebraic-geometry
tags:
  - stability
  - vector-bundles-sheaves
arxiv_id: "2601.22994v1"
arxiv_url: "https://arxiv.org/abs/2601.22994"
arxiv_submitted: "2026-01-30"
arxiv_updated: "2026-01-30"
summary: >-
  任意の複素滑らかな射影多様体 $X$ について、導来圏 $D^b(X)$ にBridgeland安定性条件が存在することを示す。楕円曲線の積上の安定性条件を有限射で射影空間へ降ろし、さらに閉埋込みを通じて一般の $X$ へ誘導する構成である。
abstract_en: ""
summary_en: >-
  The paper proves nonemptiness of the Bridgeland stability manifold for the bounded derived category of every smooth complex projective variety. Its construction begins with known stability conditions on products of an elliptic curve, descends them through a finite quotient to projective space, and then induces a condition along a projective embedding. Two comparison properties control these operations and ensure the required support property.
abstract_ja: >-
  $X$ を複素数体上の滑らかな射影多様体とする。本論文は、$X$ 上の連接層の有界導来圏 $\mathrm D^b(X)$ が常にBridgelandの意味での安定性条件をもつことを示す。
abstract_source_url: "https://arxiv.org/abs/2601.22994"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2601.22994](https://arxiv.org/abs/2601.22994)
- **著者:** Chunyi Li
- **初回投稿日・最終更新日:** 2026年1月30日（v1）
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

三角圏上のBridgeland安定性条件が存在すれば、その全体は自然に複素多様体をなす。しかし高次元射影多様体の導来圏については、そもそも安定性条件が一つでも存在するかが基本的な問題である。

本論文は任意の複素滑らかな射影多様体に対して存在を肯定する。出発点は楕円曲線 $E$ の積 $E^n$ 上で既知の安定性条件であり、有限商 $E^n\to\mathbb P^n$ を経て射影空間へ安定性条件を降ろす。

次に任意の閉埋込み $X\hookrightarrow\mathbb P^n$ に沿って安定性条件を誘導する。Bayer propertyとRestriction-$N$ propertyという二つの比較条件が、有限射と閉埋込みを通じた構成を可能にする。

## 背景と問題設定

安定性条件はslicing $\mathcal P$ とcentral charge $Z:K_0(\mathcal T)\to\mathbb C$ の組であり、Harder–Narasimhan filtrationとsupport propertyを要求する。support propertyの一つの表示は、半安定対象 $E$ に対する

$$
|Z(v(E))|\ge C_\sigma\|v(E)\|
$$

である。問題は $\mathcal T=D^b(X)$ に対してこのデータを具体的に構成することである。

## 主結果

### 全ての滑らかな射影多様体上での存在（Theorem 1.1）

$X$ を $\mathbb C$ 上の任意の滑らかな射影多様体とする。このとき

$$
\operatorname{Stab}(D^b(X))\ne\varnothing
$$

である。すなわち、次元や幾何型に追加条件を課さず、連接層の有界導来圏にBridgeland安定性条件が存在する。

## 証明の見取り図

Introductionは四段階を明示する。第一に、楕円曲線の積上の既知の安定性条件がBayer propertyを満たす。第二に、parameterを十分大きく取ると任意の指定された $N$ に対するRestriction-$N$ propertyも得る。

第三に、有限商

$$
E^n\longrightarrow E^n/((\mathbb Z/2\mathbb Z)^n\rtimes S_n)\simeq\mathbb P^n
$$

を用いて安定性条件を $\mathbb P^n$ へ降ろす。ここでは $(\mathbb P^1)^n\to\mathbb P^n$ に関するsheafを対称群のgraphに対応する商をもつfiltrationへ分解し、有限射による誘導条件を検証する。最後に、閉埋込み $X\hookrightarrow\mathbb P^n$ と二つのpropertyを使い、$X$ 上へ安定性条件を誘導する。

## 原論文との対応

- **Abstractページ:** [arXiv:2601.22994](https://arxiv.org/abs/2601.22994)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1（証明の四段階として Lemma 2.3, Proposition 5.4, Theorems 6.3, 6.5）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
