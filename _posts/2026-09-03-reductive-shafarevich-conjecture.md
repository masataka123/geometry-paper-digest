---
layout: paper
title: "Reductive Shafarevich Conjecture"
title_ja: "還元的 Shafarevich 予想"
authors: "Ya Deng, Katsutoshi Yamanoi, Ludmil Katzarkov"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  In this paper, we prove the holomorphic convexity of the covering of a complex projective {normal} variety $X$, which corresponds to the intersection of kernels of reductive representations $ρ:π_1(X)\to {\rm GL}_{N}(\mathbb{C})$, therefore answering a question by Eyssidieux, Katzarkov, Pantev, and Ramachandran in 2012. It is worth noting that Eyssidieux had previously proven this result in 2004 when $X$ is smooth. While our approach follows the general strategy employed in Eyssidieux's proof, it introduces several improvements and simplifications. Notably, it avoids the necessity of using the reduction mod $p$ method in Eyssidieux's original proof. Additionally, we construct the Shafarevich morphism for complex reductive representations of fundamental groups of complex quasi-projective varieties unconditionally, and proving its algebraic nature at the function field level.
topic: algebraic-geometry
tags:
  - fundamental-groups
  - complex-analytic-spaces
  - stein-geometry
  - higgs-nonabelian-hodge
arxiv_id: "2306.03070v2"
arxiv_url: "https://arxiv.org/abs/2306.03070"
arxiv_submitted: "2023-06-05"
arxiv_updated: "2024-05-29"
summary: >-
  複素射影正規多様体の基本群の還元的表現すべての核の共通部分に対応する被覆が正則凸であることを示し、滑らかな場合の Eyssidieux の定理を特異な場合へ拡張する。さらに準射影正規多様体上の単一または族としての還元的表現に Shafarevich 射を無条件に構成し、関数体レベルの代数性と、大表現に対応する中間被覆の Stein 性を得る。
abstract_en: >-
  In this paper, we prove the holomorphic convexity of the covering of a complex projective {normal} variety $X$, which corresponds to the intersection of kernels of reductive representations $ρ:π_1(X)\to {\rm GL}_{N}(\mathbb{C})$, therefore answering a question by Eyssidieux, Katzarkov, Pantev, and Ramachandran in 2012. It is worth noting that Eyssidieux had previously proven this result in 2004 when $X$ is smooth. While our approach follows the general strategy employed in Eyssidieux's proof, it introduces several improvements and simplifications. Notably, it avoids the necessity of using the reduction mod $p$ method in Eyssidieux's original proof. Additionally, we construct the Shafarevich morphism for complex reductive representations of fundamental groups of complex quasi-projective varieties unconditionally, and proving its algebraic nature at the function field level.
summary_en: ""
abstract_ja: >-
  複素射影正規多様体 $X$ について、すべての還元的表現 $\rho:\pi_1(X)\to\mathrm{GL}_N(\mathbb C)$ の核の共通部分に対応する被覆が正則凸であることを証明する。これは滑らかな場合の既知の結果を特異な場合へ拡張し、2012年に提起された問題へ答えるものである。証明は従来の mod $p$ 還元を避ける。また、複素準射影多様体の基本群の還元的表現に対する Shafarevich 射を無条件に構成し、その関数体レベルでの代数性を示す。
abstract_source_url: "https://arxiv.org/abs/2306.03070"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **著者**: Ya Deng, Katsutoshi Yamanoi, Ludmil Katzarkov
- **arXiv**: [arXiv:2306.03070v2](https://arxiv.org/abs/2306.03070)
- **初回投稿日**: 2023年6月5日
- **更新日**: 2024年5月29日
- **主要カテゴリ**: math.AG
- **ライセンス**: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## 要約

Shafarevich 予想は、複素射影多様体の普遍被覆が正則凸であると予想する。正則凸性は、複素空間が Stein 空間への固有全射正則写像を持つことと同値であり、被覆の複素解析的な大域構造を制御する。

非可換 Hodge 理論を使う還元的な場合は、滑らかな射影多様体について Eyssidieux が証明していた。本稿はまず、準射影正規多様体の還元的表現に対する Shafarevich 射を無条件に構成し、どの部分多様体が一点へ潰れるかをモノドロミー像の有限性で特徴づける。

次に、射影正規多様体について表現族の核の共通部分が定める Galois 被覆の正則凸性を示す。特にすべての還元的表現を取ることで、特異多様体に対する還元的 Shafarevich 予想を得る。

証明は Eyssidieux の大枠を継承しつつ、mod $p$ 還元を避け、rigid と non-rigid の場合を統一する。絶対構成可能集合の定義を広げることで、滑らかな Higgs 束モジュライが直接使えない正規特異多様体も扱う。

## 背景と問題設定

表現 $\rho:\pi_1(X)\to\mathrm{GL}_N(\mathbb C)$ に対する Shafarevich 射 $\operatorname{sh}_\rho:X\to\operatorname{Sh}_\rho(X)$ は、正規化した部分多様体の基本群像が $\rho$ のもとで有限となることと、その部分多様体が一点へ写ることを対応させる。従来は滑らかな射影多様体が中心であり、準射影性、特異点、表現の族を同時に扱う構成が課題であった。

## 主結果

### Shafarevich 射の構成（Theorem A）

準射影正規多様体 $X$ と還元的表現 $\rho$ に対し、一般ファイバーが連結な支配的正則写像

$$
\operatorname{sh}_\rho:X\longrightarrow\operatorname{Sh}_\rho(X)
$$

が存在する。連結な Zariski 閉集合 $Z$ が一点へ写ることは、各既約成分の正規化から来る基本群の像が $\rho$ のもとで有限となることと同値である。さらに適切な双有理修正後には代数的射として実現され、関数体レベルの代数性が得られる。ただし標的自体の準射影性と射の完全な代数性は Introduction では予想として残される。

### 表現族（Corollary B）

還元的表現の空でない族 $\Sigma$ に対しても $\operatorname{sh}_\Sigma$ が存在し、部分多様体が潰れることをすべての $\rho\in\Sigma$ に対するモノドロミー像の有限性で同時に特徴づける。

### 正則凸性（Theorem C）

$X$ を射影正規多様体、$\mathfrak C$ を $\mathbb Q$ 上定義された character variety 内の絶対構成可能集合とする。$\mathfrak C$ に属する還元的表現の核の共通部分を $H$ とすれば、中間被覆

$$
\widetilde X_{\mathfrak C}=\widetilde X/H
$$

は正則凸である。特に全還元的表現の核の共通部分に対応する被覆が正則凸となり、基本群が還元的 Zariski 閉包を持つ線形群へ忠実に入る場合には普遍被覆そのものが正則凸となる。

### 大表現の場合（Theorem D）

$\mathfrak C$ が、任意の正次元部分多様体上で無限モノドロミーを検出するという意味で large なら、$\widetilde X$ と $\widetilde X_{\mathfrak C}$ の間のすべての中間被覆は Stein である。これは正則凸性より強い結論である。

## 証明の見取り図

非可換 Hodge 理論と絶対構成可能な表現集合を用いて Shafarevich 射を構成し、rigid・non-rigid 表現を統一的に処理する。適切な plurisubharmonic exhaustion と Eyssidieux の Lefschetz 型定理から被覆の正則凸性へ進む。従来の mod $p$ 還元を使わないこと、絶対構成可能性を正規特異空間にも適用できる形へ拡張したことが方法上の主要な差である。

## 原論文との対応

本記事は Abstract と Introduction の Theorem A、Corollary B、Theorems C–D、および novelty の説明に基づく。定理番号が複数の本文結果に対応すること、完全な代数性が予想に留まることを区別した。技術的な非可換 Hodge 理論と Appendix の定義は対象外である。
