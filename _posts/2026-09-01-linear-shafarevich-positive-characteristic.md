---
layout: paper
title: "Linear Shafarevich Conjecture in positive characteristic, Hyperbolicity and Applications"
title_ja: "正標数線形表現に対するShafarevich予想・双曲性・応用"
authors: "Ya Deng, Katsutoshi Yamanoi"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG, math.CV]
arxiv_abstract: >-
  Given a complex quasi-projective normal variety $X$ and a linear representation $\varrho:π_1(X)\to {\rm GL}_{N}(K)$ with $K$ any field of positive characteristic, we mainly establish the following results: 1. the construction of the Shafarevich morphism ${\rm sh}_\varrho:X\to {\rm Sh}_\varrho(X)$ associated with $\varrho$. 2. In cases where $X$ is projective, $\varrho$ is faithful and the $Γ$-dimension of $X$ is at most two (e.g. $\dim X=2$), we prove that the Shafarevich conjecture holds for $X$. 3. In cases where $\varrho$ is big, we prove that the Green-Griffiths-Lang conjecture holds for $X$. 4. When $\varrho$ is big and the Zariski closure of $\varrho(π_1(X))$ is a semisimple algebraic group, we prove that $X$ is pseudo Picard hyperbolic, and strongly of log general type. 5. If $X$ is special or $h$-special, then $\varrho(π_1(X))$ is virtually abelian. We also prove Claudon-Höring-Kollár's conjecture for complex projective manifolds with linear fundamental groups of any characteristic.
topic: algebraic-geometry
tags: [fundamental-groups, hyperbolicity]
arxiv_id: "2403.16199v2"
arxiv_url: "https://arxiv.org/abs/2403.16199"
arxiv_submitted: "2024-03-24"
arxiv_updated: "2025-10-09"
summary: >-
  正標数体上の基本群表現からShafarevich射を構成し、低い$\Gamma$次元で普遍被覆の正則凸性を証明する。bigな表現の下ではGreen–Griffiths–Lang型双曲性、特別多様体の表現像の仮想可換性、普遍被覆に関する構造定理も導く。
abstract_en: >-
  Given a complex quasi-projective normal variety $X$ and a linear representation $\varrho:π_1(X)\to {\rm GL}_{N}(K)$ with $K$ any field of positive characteristic, we mainly establish the following results: 1. the construction of the Shafarevich morphism ${\rm sh}_\varrho:X\to {\rm Sh}_\varrho(X)$ associated with $\varrho$. 2. In cases where $X$ is projective, $\varrho$ is faithful and the $Γ$-dimension of $X$ is at most two (e.g. $\dim X=2$), we prove that the Shafarevich conjecture holds for $X$. 3. In cases where $\varrho$ is big, we prove that the Green-Griffiths-Lang conjecture holds for $X$. 4. When $\varrho$ is big and the Zariski closure of $\varrho(π_1(X))$ is a semisimple algebraic group, we prove that $X$ is pseudo Picard hyperbolic, and strongly of log general type. 5. If $X$ is special or $h$-special, then $\varrho(π_1(X))$ is virtually abelian. We also prove Claudon-Höring-Kollár's conjecture for complex projective manifolds with linear fundamental groups of any characteristic.
summary_en: ""
abstract_ja: >-
  複素準射影正規多様体の基本群から正標数体上の一般線形群への表現に対し、対応するShafarevich射を構成する。射影的で表現が忠実かつ$\Gamma$次元が高々2なら、普遍被覆の正則凸性を示す。bigな表現からGreen–Griffiths–Lang予想型の結論を得て、さらに半単純なZariski閉包の下で擬Picard双曲性と強いlog一般型を導く。特別または$h$-特別な多様体では表現像が仮想可換となる。
abstract_source_url: "https://arxiv.org/abs/2403.16199"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2403.16199v2](https://arxiv.org/abs/2403.16199)
- **著者:** Ya Deng, Katsutoshi Yamanoi
- **初回投稿日:** 2024年3月24日
- **最終更新日:** 2025年10月9日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Shafarevich予想は複素射影多様体の普遍被覆が正則凸であることを予想する。本論文は正標数体上の線形表現を起点として、表現が有限像になる部分多様体をちょうど収縮する代数的Shafarevich射を構成する。

射影正規多様体で表現が忠実、かつ$\Gamma$次元が高々2なら普遍被覆の正則凸性が従う。これは特に曲面を含む。他方、準射影多様体上のbigな表現は、log一般型と複数の双曲性概念の対応を与える。

さらに表現像のZariski閉包が半単純なら非双曲的軌跡が真部分集合となる。特別多様体に対しては正標数表現の像が仮想可換となり、compactifiableな普遍被覆をもつ多様体のAlbanese写像の構造へ応用される。

## 背景と問題設定

表現$\varrho:\pi_1(X)\to\mathrm{GL}_N(K)$に付随するShafarevich射は、部分多様体の基本群像が有限であることをファイバーの幾何として符号化する。正標数では複素非可換Hodge理論を直接使えず、Bruhat–Tits建物への調和写像から得られる多価1形式が代替となる。

## 主結果

### Shafarevich射の構成（Theorem A = Theorem 2.9）

複素準射影正規多様体$X$と正標数体$K$上の表現$\varrho$に対し、連結一般ファイバーをもつ支配的代数射

$$
\operatorname{sh}_\varrho:X\to\operatorname{Sh}_\varrho(X)
$$

が存在する。連結閉集合$Z$が一点へ写ること、$\varrho(\operatorname{Im}[\pi_1(Z)\to\pi_1(X)])$が有限であること、各既約成分の正規化上で半単純化表現の像が有限であることは同値である。

### Shafarevich予想（Theorem B = Theorem 6.23）

$X$が射影正規、$\varrho$が忠実、$X$の$\Gamma$次元が高々2なら、普遍被覆$\widetilde X$は正則凸である。

### Green–Griffiths–Lang型同値（Theorems C, D）

正標数体上のbigな表現をもつ準射影正規多様体では、log一般型、強いlog一般型、擬Picard双曲性、擬Brody双曲性が同値となる。さらに表現が有限となる特別軌跡の外で、半アーベル像、非log一般型部分多様体、整曲線、真性特異点をもつ穿孔円板像から定まる各非双曲的軌跡が一致する。

### 特別多様体への応用（Theorem F）

滑らかな準射影多様体がspecialまたは$h$-specialなら、任意の正標数線形表現の像は仮想可換である。

## 証明の見取り図

正標数表現からBruhat–Tits建物上の調和写像と多価1形式を取り出し、その葉層と代数的可積分性を用いてShafarevich射を構成する。得られた射とNevanlinna理論的手法を組み合わせ、big性が例外軌跡の外で代数的・解析的双曲性を同時に強制することを示す。Introductionは主定理間の依存関係を図示し、Shafarevich射が後続の双曲性・構造定理の基盤となることを明記する。

## 原論文との対応

- **Abstractページ:** [arXiv:2403.16199](https://arxiv.org/abs/2403.16199)
- **Introduction:** Section 0, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems A–F; Corollaries G, H
- **論文構成の説明:** Section 0.5, pp. 4–5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
