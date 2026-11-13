---
layout: paper
title: A counterexample on the main flatness conjecture for $\mathrm{SL}_n(\mathbb{C})$-Fock bundles
title_ja: Fock束の大域的平坦性予想に対する反例
authors: Sotiria Chatzimarkou
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
- math.GT
arxiv_abstract: The main flatness conjecture for $\mathrm{SL}_n(\mathbb{C})$-Fock bundles predicts the existence of a unique strongly positive flat compatible Hermitian metric for every $\mathrm{SL}_n(\mathbb{C})$-Fock bundle. We use cyclic Higgs bundles to disprove this conjecture for every rank $n \geq 3.$
topic: differential-geometry
tags:
- higgs-nonabelian-hodge
- vector-bundles-sheaves
arxiv_id: 2611.14847v1
arxiv_url: https://arxiv.org/abs/2611.14847
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: すべてのSL(n,C)-Fock束に強正値で平坦な適合Hermitian計量が一意に存在するという予想を、nが3以上で否定する。巡回Higgs束の調和計量から正値性が限界に達する壁を構成し、存在と一意性が同時には保てないことを示す。
abstract_en: The main flatness conjecture for $\mathrm{SL}_n(\mathbb{C})$-Fock bundles predicts the existence of a unique strongly positive flat compatible Hermitian metric for every $\mathrm{SL}_n(\mathbb{C})$-Fock bundle. We use cyclic Higgs bundles to disprove this conjecture for every rank $n \geq 3.$
summary_en: ''
abstract_ja: 高次複素構造のゲージ理論的模型であるFock束について、強正値な平坦適合計量の大域的な存在・一意性を検討する。巡回Higgs束に付随する調和計量の漸近挙動から、強正値性を判定する量が1に達するパラメータを得る。そこで計量が存在しないか、壁の直前で複数の計量が存在するかの二者択一が生じ、階数3以上の主平坦性予想は成立しない。
abstract_source_url: https://arxiv.org/abs/2611.14847
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.14847v1](https://arxiv.org/abs/2611.14847)
- **著者:** Sotiria Chatzimarkou
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.DG（主分類）; math.AG, math.GT
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

高次Teichmüller理論では、曲面の複素構造とHitchin成分の対応を高階数へ広げることが目標となる。Fock束は高次複素構造をゲージ理論で扱うために導入された対象であり、その上の特別なHermitian計量が平坦接続を与えると期待されていた。

主平坦性予想は、各Fock束に強正値で平坦な適合計量が一意に存在すると主張する。本論文は、この存在と一意性の組合せがすべての階数 $n\geq3$ で破綻することを示す。Fuchsian軌跡近傍での既知の局所結果を否定するものではなく、大域的な拡張への障害を与える。

反例の機構は巡回Higgs束の調和計量にある。パラメータを大きくすると、強正値性を判定する作用素のノルムが閾値を越える。その最初の境界で存在が失われるか、存在を保とうとすれば直前で一意性が失われる。この二者択一を明示することが主定理である。

## 背景と問題設定

種数 $g\geq2$ の閉曲面を考える。非可換Hodge対応はHiggs束から平坦接続・表現を作るが、Fock束の構造に適合する計量については追加の強正値性が要求される。Conjecture 1.1は適切なゲージ変換後に三項接続が平坦となる計量の存在・一意性を述べる。

著者は巡回Higgs束
$$
\theta\_t=\Phi\_F+Q\_t,\qquad Q\_t=tq\_nE\_{1n},\qquad t\geq0
$$
とその調和計量 $h\_t$ から
$$
\Phi\_t=\Phi\_F+Q\_t^{\ast h\_t}
$$
というFock場を構成する。対応する平坦接続がFock束の標準三項接続と一致するのは、$h\_t$ が必要な正値性を満たす範囲である。

## 主結果

### 主平坦性予想の否定（Theorem 1.2）

各 $n\geq3$ で、構成した族の正値性の壁 $t\_\ast $ において、次の少なくとも一方が生じる。

- $\Phi\_{t\_\ast }$ に強正値な平坦適合Hermitian計量が存在しない。
- $t<t\_\ast $ で十分 $t\_\ast $ に近いすべての $t$ について、$\Phi\_t$ に異なる二つ以上の強正値な平坦適合Hermitian計量が存在する。

したがって普遍的な存在と普遍的な一意性は同時に成立しない。どちらが必ず破れるかを一律に断定する定理ではない。また、これが含意していたFock–Thomas予想そのものを否定する論理にはならない。

### 強正値性を失う閾値

Fock場の二成分を
$$
A\_t=\sum\_{i=1}^{n-1}a\_{i,t}E\_{i+1,i},\qquad B\_t=\beta\_tE\_{n1}
$$
と書く。交換子から定まるグラフ作用素のノルムは
$$
W\_t(x)=\Vert C\_{\Phi\_t,h\_t,x}\Vert \_{\mathrm{op}}^2
=|\beta\_t|^2\sum\_{i=1}^{n-1}|a\_{i,t}|^{-2}.
$$
強正値性の判定条件は $W\_t(x)<1$ である。$q\_n$ の零点を避けると $|\beta\_t/a\_{i,t}|\to1$ であり、$W\_t(x)\to n-1$ となる。そこで
$$
\Lambda(t)=\max\_{x\in\Sigma}W\_t(x),\qquad
t\_\ast  =\inf\lbrace t>0:\Lambda(t)\geq1\rbrace
$$
と定義し、連続性により $\Lambda(t\_\ast )=1$ を得る。$n\geq3$ なら極限値が閾値を超えることが本質である。

## 証明の見取り図

Introductionの説明では、巡回Higgs束をFock束へ組み替え、正値性を作用素ノルムの条件に翻訳する。Collier–Liによる調和計量の漸近評価が壁の存在を保証する。その壁で別の強正値な平坦適合計量が存在すると仮定した場合には、壁の直前で二つの計量が生じるという議論により、一意性との両立を排除する。後続節の解析的議論全体を本記事で検証したものではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.14847)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.14847v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Conjecture 1.1, Theorem 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.14847v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
