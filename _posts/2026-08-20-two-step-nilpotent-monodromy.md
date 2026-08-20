---
layout: paper
title: "Two-step nilpotent monodromy of local systems on special varieties"
title_ja: "特殊多様体上の局所系の2段冪零モノドロミー"
authors: "Junyan Cao, Ya Deng, Christopher D. Hacon, Mihai Paun"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $X$ be a smooth complex quasi-projective variety that is special in the sense of Campana. We prove that the monodromy group of any complex local system on $X$ is virtually nilpotent of class at most $2$. This result sharply refines a theorem of Cadorel, Yamanoi, and the second author. To establish this result, we develop a deformation theory for certain local systems on quasi-compact Kähler manifolds by constructing universal deformations for such local systems. As a byproduct of our argument, we also show that a general fiber of the quasi-Albanese map of $X$ is special, extending a result of Campana and Claudon from the projective to the quasi-projective setting.
topic: algebraic-geometry
tags:
  - fundamental-groups
  - higgs-nonabelian-hodge
arxiv_id: "2603.14539v2"
arxiv_url: "https://arxiv.org/abs/2603.14539"
arxiv_submitted: "2026-03-15"
arxiv_updated: "2026-04-07"
summary: >-
  Campanaの意味で特殊な滑らかな複素準射影多様体上では、任意の複素局所系のモノドロミーが有限指数部分群を除いて冪零度高々2となることを示す。準コンパクトKähler多様体上の局所系の普遍変形とquasi-Albanese写像を組み合わせ、従来の「virtually nilpotent」を鋭く定量化する。
abstract_en: >-
  Let $X$ be a smooth complex quasi-projective variety that is special in the sense of Campana. We prove that the monodromy group of any complex local system on $X$ is virtually nilpotent of class at most $2$. This result sharply refines a theorem of Cadorel, Yamanoi, and the second author. To establish this result, we develop a deformation theory for certain local systems on quasi-compact Kähler manifolds by constructing universal deformations for such local systems. As a byproduct of our argument, we also show that a general fiber of the quasi-Albanese map of $X$ is special, extending a result of Campana and Claudon from the projective to the quasi-projective setting.
summary_en: ""
abstract_ja: >-
  Campanaの意味で特殊な滑らかな複素準射影多様体 $X$ に対し、任意の複素局所系のモノドロミー群が有限指数部分群を取れば冪零度高々2となることを証明する。そのため準コンパクトKähler多様体上の特定の局所系について普遍変形を構成し、変形理論を整備する。副産物として、$X$ のquasi-Albanese写像の一般ファイバーも特殊であることを示し、射影的な場合のCampana–Claudonの結果を準射影の場合へ拡張する。
abstract_source_url: "https://arxiv.org/abs/2603.14539"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2603.14539](https://arxiv.org/abs/2603.14539)
- **著者:** Junyan Cao, Ya Deng, Christopher D. Hacon, Mihai Paun
- **初回投稿日:** 2026年3月15日
- **最終更新日:** 2026年4月7日（v2）
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Campanaの特殊多様体は、正次元の一般型orbifold底へのfibrationをもたない多様体である。既知の結果はその上の複素局所系のモノドロミーがvirtually nilpotentであることを保証したが、冪零度を一様には決めていなかった。

本論文は冪零度が常に高々2であることを証明する。このboundは、基本群自身が2-step nilpotentだがvirtually abelianではない特殊多様体が存在するため、本質的に鋭い。

技術的中心は、準コンパクトKähler多様体上のextendable unitary local systemの普遍変形と、quasi-Albanese写像を2回たどるとunipotent representationが消える「2-step phenomenon」である。加えてquasi-Albanese写像の一般ファイバーが特殊性を保つことを証明する。

## 背景と問題設定

群 $G$ が長さ $n$ のcentral seriesをもつとき冪零度高々 $n$ と呼ぶ。1-stepは可換群であり、2-stepでは交換子群が中心に入る。問題は、特殊準射影多様体 $X$ の任意の表現

$$
\rho:\pi_1(X)\longrightarrow \mathrm{GL}_N(\mathbb C)
$$

の像について、この長さを幾何からどこまで制御できるかである。

## 主結果

### 特殊多様体のモノドロミー（Theorem A / Theorem 6.2）

$X$ をCampanaの意味で特殊な滑らかな複素準射影多様体とする。このとき任意の線形表現 $\rho$ の像 $\rho(\pi_1(X))$ はvirtually nilpotent of class at most 2である。すなわち有限指数部分群を取れば、その交換子群は中心に含まれる。

### 2-step phenomenon（Theorem B / Theorem 6.1）

準コンパクトKähler多様体のcompactifiable holomorphic map $Z\xrightarrow{g}Y\xrightarrow{f}X$ を考え、$f(Y)$ と $g(Z)$ がそれぞれquasi-Albanese写像で点へ送られるとする。自明表現を含む表現多様体の既約成分に属する任意の表現は、合成 $f\circ g$ でpullbackすると自明になる。特にunipotent representationに適用できる。

### quasi-Albaneseファイバーの特殊性（Theorem E / Theorem 7.15）

特殊な滑らかな準射影多様体のquasi-Albanese写像はdominantで連結な一般ファイバーをもち、その一般ファイバーも特殊である。これは射影の場合の結果を準射影設定へ拡張する。

## 証明の見取り図

有限エタール被覆後、モノドロミー像のZariski閉包をunipotent群 $U$ とtorus $T$ の積へ分解し、$U$ の像だけを考える。quasi-Albanese写像の一般ファイバー $Y$ と、さらに $Y$ のquasi-Albanese一般ファイバー $F$ を取る。特殊性の保存と2-step phenomenonにより $\pi_1(F)$ の像が消え、$\pi_1(Y)$ の像は可換となる。$\pi_1(Y)\to\pi_1(X)\to\pi_1(\operatorname{Alb}(X))$ のexactnessから、全体の像が2-step nilpotentと分かる。

## 原論文との対応

- **Abstractページ:** [arXiv:2603.14539](https://arxiv.org/abs/2603.14539)
- **Introduction:** Section 1, pp. 1–5
- **主要結果:** Theorems A–E, Corollaries F–G
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
