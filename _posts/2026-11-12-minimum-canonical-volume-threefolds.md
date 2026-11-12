---
layout: paper
title: The Minimum Canonical Volume of Threefolds of General Type
title_ja: 一般型三次元多様体の標準体積の最小値
authors: Pinxian Bie, Peien Du, Zhengjie Yu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove the sharp lower bound $vol(X) \geq 1/420$ for every smooth complex projective threefold $X$ of general type.
topic: algebraic-geometry
tags:
- birational-geometry
- minimal-model-program
- hodge-theory
- foliations
arxiv_id: 2611.12786v1
arxiv_url: https://arxiv.org/abs/2611.12786
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 滑らかな複素射影一般型三次元多様体の標準体積に対し、最良の一様下界1/420を証明する。従来残っていたEuler標数2と3の場合を、正則二形式の極と標準切断の制約によって排除する。
abstract_en: ''
summary_en: The smallest canonical volume is a quantitative birational invariant in dimension three. Earlier results left exceptional Euler characteristics in the sharp lower-bound problem. This paper excludes those possibilities by using holomorphic two-forms to constrain the canonical sections that numerical basket calculations still allow. An explicit weighted hypersurface supplies the sharpness example.
abstract_ja: 一般型三次元多様体の標準体積がどこまで小さくなれるかを決定する論文である。全ての滑らかな複素射影一般型三次元多様体に体積1/420以上という評価を与え、この値を達成する既知の重み付き超曲面の滑らかなモデルにより最良性を確認する。証明では、特異点の数値的可能性を列挙する方法に加え、正則二形式と多重標準因子の幾何学的両立性を用いる。
abstract_source_url: https://arxiv.org/abs/2611.12786
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.12786v1](https://arxiv.org/abs/2611.12786)
- **著者:** Pinxian Bie, Peien Du, Zhengjie Yu
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標準体積は、多重標準切断の数が次数とともに増える速さを表す。一般型である以上それは正だが、三次元でどれほど小さくなれるかを正確に決めることは、極小モデルの特異点と低次数の切断系が絡む問題である。

本論文は、滑らかな複素射影一般型三次元多様体の標準体積が少なくとも $1/420$ であると示す。この値は実際に達成されるため、単なる改良された下界ではなく最小値の決定となる。

既存研究によって残されていたEuler標数二と三の場合を解決する点が中心である。小さい多重標準系が鉛筆を作れないほど切断に乏しい状況でも、正則二形式の制約は残る。著者らはその制約を固定成分や重複度を保ったまま利用し、数値的には可能な配置を幾何学的に排除する。

## 背景と問題設定

滑らかな射影三次元多様体 $X$ の標準体積は

$$
\operatorname{vol}(X)=\limsup\_{m\to\infty}\frac{6h^0(X,mK\_X)}{m^3}
$$

であり、terminal極小モデル $Y$ 上では $K\_Y^3$ に等しい。双有理不変量である一方、三次元の極小モデルには特異点が現れるため、その寄与をReidのRiemann–Roch公式とbasketで管理する必要がある。

Introductionによれば、Chen–Chenの一般下界は $1/1680$ で、Euler標数が小さい場合には最良値が知られていた。Chen–Jiangの仕事により $1/420$ の問題は $\chi(\mathcal O\_X)=2,3$ を残すところまで進んでいた。

## 主結果

### 標準体積の鋭い下界（Theorem 1.1）

全ての滑らかな複素射影一般型三次元多様体 $X$ について

$$
\operatorname{vol}(X)\ge\frac1{420}
$$

が成り立つ。幾何種数やEuler標数に追加仮定はない。

一般の重み付き超曲面

$$
X\_{46}\subset\mathbb P(4,5,6,7,23)
$$

の滑らかな射影モデルが等号を達成する。ここで示される最良性と、等号を達成する全ての多様体の分類とは別であり、Introductionの主定理を後者へ拡張して解釈しない。

## 証明の見取り図

小体積の場合に残る $\chi=2,3$ では、$p\_g=q=0$ である一方、$h^{2,0}=\chi-1$ により正則二形式が存在する。一般の鉛筆へ制限する従来の道具が使えない低次数でも、これらの形式は標準因子の成分に非自明な制約を与える。

$\chi=3$ では二つの二形式から得る捩れたベクトル場とその退化因子を使う。葉層構造に関するBott型の関係と半安定性、Hodge型の等号条件を組み合わせ、数値的なbasketの候補を減らす。

$\chi=2$ では、二形式が見える因子成分上の随伴関係が追加の次数制約を与える。極の二乗や積を標準切断の空間に比較し、被約成分だけでなく、因子全体の重複度を保持するtraceを用いる。最終的に残る配置には楕円K3曲面の幾何が現れ、偏極の可除性やWeierstrass表示に関する制約で排除する。

Introductionは有限の数値計算とその検証資料にも言及するが、本記事の範囲はそこで説明された戦略までであり、後続の全計算や証明の独立検証ではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.12786)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.12786v1) — Section 1, pp. 3–4
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.12786v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
