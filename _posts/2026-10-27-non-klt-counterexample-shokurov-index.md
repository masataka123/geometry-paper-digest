---
layout: paper
title: A non-klt counterexample to Shokurov's index conjecture
title_ja: 非klt設定におけるShokurov指数予想の反例
authors: Yusuke Nakamura, Kohsuke Shibata
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We give a counterexample to Shokurov's index conjecture for minimal log discrepancies in the non-klt setting.
topic: algebraic-geometry
tags:
- singularities
- birational-geometry
arxiv_id: 2608.28038v1
arxiv_url: https://arxiv.org/abs/2608.28038
arxiv_submitted: '2026-08-28'
arxiv_updated: '2026-08-28'
summary: 三次元で最小対数的食い違いを1に固定しても、標準因子のCartier指数が任意に大きくなる例を構成する。楕円曲線上の錐とアフィン直線の積の巡回商により、非klt設定でShokurovの指数予想を否定する。
abstract_en: We give a counterexample to Shokurov's index conjecture for minimal log discrepancies in the non-klt setting.
summary_en: ''
abstract_ja: 最小対数的食い違いと次元から標準因子のCartier指数を抑えるShokurovの予想に、非kltの場合の反例を与える。各正整数mに対し、閉点で最小対数的食い違いが1、Cartier指数がちょうどmとなる三次元正規有理Gorenstein多様体を構成する。反例はlog canonicalだがkltではなく、klt設定への同じ構成の適用はできない。
abstract_source_url: https://arxiv.org/abs/2608.28038
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.28038v1](https://arxiv.org/abs/2608.28038)
- **著者:** Yusuke Nakamura, Kohsuke Shibata
- **初回投稿日:** 2026-08-28
- **最終更新日:** 2026-08-28
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

最小対数的食い違いは特異点の性質を測る不変量であり、標準因子のCartier指数は何倍すると局所的にCartierになるかを測る。Shokurovの指数予想は、次元と前者を固定すれば後者に上限があると主張する。本論文は、その一般形に反例を与える。

反例は三次元ですでに存在し、指定した閉点の最小対数的食い違いは常に1である。それにもかかわらず標準因子の指数は任意の正整数を取る。楕円曲線上のアフィン錐とアフィン直線の積に巡回群を作用させることで、二つの不変量を独立に制御する。

重要な制限は、構成した特異点がlog canonicalではあるがkltではないことである。閉点の最小対数的食い違いが正であることと、その近傍の特異点がkltであることを混同してはいけない。著者らはkltを仮定する、またはlog canonical設定で値0に限るという予想の修正を提案するが、その修正版を証明したわけではない。

## 背景と問題設定

体は標数0の代数閉体である。標準因子 $K\_X$ が有理Cartierな多様体と閉点 $p$ に対し、Cartier指数は $p$ の近傍で $rK\_X$ がCartierとなる最小の正整数 $r$ である。Conjecture 1.1は

$$
\dim X=n,\qquad \operatorname{mld}\_p(X)=a
\quad\Longrightarrow\quad
\operatorname{ind}\_p(K\_X)\le r(n,a)
$$

という一様上界を予想する。ここで $n>0$、$a\ge0$ を固定する。

曲面、三次元の特定の特異点クラス、トーリック特異点や商特異点などには肯定的な先行結果がある。論文はそれらを否定するものではなく、より一般的な非kltの設定で予想が破れることを示す。

## 主結果

### 値1を保つ任意指数の三次元反例（Theorem 1.2）

任意の整数 $m\ge1$ に対し、三次元正規有理Gorenstein多様体 $X\_m$ と閉点 $0\in X\_m$ が存在し

$$
\operatorname{mld}\_0(X\_m)=1,\qquad
\operatorname{ind}\_0(K\_{X\_m})=m
$$

となる。従って $(n,a)=(3,1)$ の場合に予想された上限は存在しない。指数が単に大きいというだけでなく、指定した正整数に正確に一致する。

### 反例の構成と適用範囲

次数 $m$ の豊富な直線束で偏極された楕円曲線上のアフィン錐を $Y$ とする。楕円曲線上の位数 $m$ のtorsion平行移動から $Y$ に巡回群 $G\simeq\mathbb Z/m\mathbb Z$ の作用を入れる。さらにアフィン直線の座標に原始 $m$ 乗根 $\xi$ を用いて $t\mapsto\xi t$ と作用させ

$$
X\_m=(Y\times\mathbb A^1)/G
$$

を作る。アフィン直線因子への拡大作用が、標準因子の指数をちょうど $m$ にする役割を持つ。

これらはlog canonicalかつ非kltの例である。klt特異点上には自由でないvirtually free作用がないという先行結果のため、同じ仕組みをkltの場合の反例へそのまま流用することはできない。

## 証明の見取り図

核となるのはvirtually free作用が商によって最小対数的食い違いを保存する性質である。Introductionはこの概念を、自由作用と余次元1で自由な作用の中間に位置付ける。今回の積への作用はvirtually freeとなり

$$
\operatorname{mld}\_0(X\_m)=\operatorname{mld}\_{(0,0)}(Y\times\mathbb A^1)=1
$$

が保たれる。他方、直線因子上の位数 $m$ の作用でCartier指数を増大させる。最小対数的食い違いを保存する部分と、指数を増加させる部分を分けることで反例を得る。ここではIntroductionにある構成の説明にとどめ、後続節の指数計算を新たに検証したとは主張しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2608.28038)
- **Introduction:** [PDF](https://arxiv.org/pdf/2608.28038v1) — Section 1, pp. 1–2（Section 2より前）
- **Introduction中で言及された主要結果:** Conjecture 1.1; Theorem 1.2 (= Theorem 3.2)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2608.28038v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
