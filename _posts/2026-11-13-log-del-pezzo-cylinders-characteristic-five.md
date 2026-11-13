---
layout: paper
title: Cylindricity of log del Pezzo surfaces in characteristic five
title_ja: 正標数del Pezzo曲面の円柱と持ち上げ不能性
authors: Dae-Won Lee, Masaru Nagaoka, Masatomo Sawahara
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Over an algebraically closed field of characteristic five, we prove that a log del Pezzo surface of Picard rank one contains no cylinder if it is not log liftable. We also characterize Du Val del Pezzo surfaces that contain no cylinder in positive characteristic.
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
- positive-characteristic
- birational-geometry
- minimal-model-program
arxiv_id: 2611.12341v1
arxiv_url: https://arxiv.org/abs/2611.12341
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: 正標数のDu Val del Pezzo曲面が円柱を含まない条件をPicard数とDynkin型で特徴付ける。さらに標数5のPicard数1のlog del Pezzo曲面では、Witt環への対数的持ち上げが不可能なら円柱を含まないことを示す。
abstract_en: ''
summary_en: An affine cylinder inside a del Pezzo surface imposes strong constraints on pencils and local intersections. The authors use those constraints to classify the cylinder-free Du Val case in positive characteristic. They also prove a separate obstruction for rank-one log del Pezzo surfaces in characteristic five that do not lift logarithmically to Witt vectors. The latter result answers a broader lifting question only in the stated characteristic.
abstract_ja: アフィン直線との積に同型な開集合がdel Pezzo曲面に存在するかを調べる。Du Val特異点の場合は正標数で完全な非存在条件を与え、より一般のklt特異点を許す場合には標数5で対数的持ち上げ不能性から非存在を導く。局所交点不等式と解消上の曲線配置を組み合わせ、円柱が与える可動ペンシルの基点を排除する。
abstract_source_url: https://arxiv.org/abs/2611.12341
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.12341v1](https://arxiv.org/abs/2611.12341)
- **著者:** Dae-Won Lee, Masaru Nagaoka, Masatomo Sawahara
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲面の中に $Z\times\mathbb A^1$ と同型な開集合が存在するとき、それを円柱という。Fano多様体の円柱はアフィン錐上の加法群作用と関係し、その存在は反標準因子や特異点の性質を反映する。本論文は正標数のdel Pezzo曲面について、この開集合が存在しない条件を調べる。

Du Val特異点だけを持つ場合には、任意の正標数でPicard数とDynkin型による完全な特徴付けを与える。標数零で現れる三つの型に加え、小さい正標数の特有の型が非存在リストに加わる。

より一般のlog del Pezzo曲面では、Witt環への対数的持ち上げ不能性を円柱の障害として捉える。標数5かつPicard数1という仮定の下で、この障害が実際に円柱の非存在を導くことを証明する。すべての正標数での一般的な問いは区別して残される。

## 背景と問題設定

$k$ を代数閉体とする。log del Pezzo曲面はklt特異点と豊富な反標準因子を持つ正規射影曲面であり、Du Val del Pezzo曲面は特異点をDu Val型に限ったものである。円柱があれば射影から曲面上の可動ペンシルが生じるため、その基点と局所交点数に制約がかかる。

対数的持ち上げは、解消とその例外因子からなる対をWitt環 $W(k)$ 上へ持ち上げる性質である。Introductionは、Picard数1のDu Valの場合の既知の持ち上げ不能例と円柱の非存在リストが結び付くことを動機とする。

## 主結果

### Du Val曲面の完全な特徴付け（Theorem 1.2）

$\operatorname{char}(k)>0$ のDu Val del Pezzo曲面 $X$ が円柱を含まないことは、$\rho(X)=1$ かつ
$$
\operatorname{Dyn}(X)\in
\lbrace 4A\_2,\ 2D\_4,\ 2A\_1+2A\_3,\ 4A\_1+D\_4,\ 8A\_1,\ 7A\_1\rbrace
$$
であることと同値である。ここではPicard数1を先に仮定するのではなく、それも非存在の必要条件として結論に含まれる。

### 標数5での持ち上げ障害（Main Theorem）

$k$ の標数を5とし、$X$ をPicard数1のlog del Pezzo曲面とする。$X$ が $W(k)$ 上へ対数的に持ち上がらなければ、$X$ は円柱を含まない。Du Valより悪いklt特異点も対象となるが、標数5とPicard数1という条件は外していない。

### 残る問い（Question 1.3）

任意の正標数で、Picard数1のlog del Pezzo曲面の対数的持ち上げ不能性が円柱の非存在を導くかが問われる。Du Valの場合と標数5の場合に肯定的な答えを与えることが、本論文の二つの主結果の関係である。逆方向の同値を一般に主張するものではない。

## 証明の見取り図

Du Valの場合は局所交点不等式によってリスト内の型を排除し、他の型には解消上の負曲線配置を比較して円柱を構成する。さらに $K\_X$-MMPを用い、円柱を含まない曲面がより高いPicard数を持つ可能性を除く。

標数5の主定理では、持ち上げ不能な曲面の既知の分類を使う。仮想的な円柱は一意の基点を持つペンシルを与え、そこでは対数標準性が破れる。局所不等式でまず基点候補を減らし、残りには解消上で特定の例外成分と横断的に交わる曲線を構成して係数を評価する。得られる局所交点数の下界と大域交点数が矛盾するという、最大特異点法に近い筋道である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.12341)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.12341v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.2, Main Theorem；Question 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.12341v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
