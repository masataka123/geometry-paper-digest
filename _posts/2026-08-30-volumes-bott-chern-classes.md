---
layout: paper
title: "Volumes of Bott-Chern classes"
title_ja: "Bott–Chern類の体積"
authors: "Sébastien Boucksom, Vincent Guedj, Chinh H. Lu"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AP
  - math.CV
arxiv_abstract: >-
  We study the volumes of transcendental and possibly non-closed Bott-Chern $(1,1)$-classes on an arbitrary compact complex manifold $X$. We show that the latter belongs to the class $\mathcal{C}$ of Fujiki if and only if it has the $\textit{bounded mass property}$ -- i.e., its Monge-Ampère volumes have a uniform upper-bound -- and there exists a closed Bott-Chern class with positive volume. This yields a positive answer to a conjecture of Demailly-Păun-Boucksom. To this end we extend to the hermitian context the notion of non-pluripolar products of currents, allowing for the latter to be merely ${\it quasi}$-${\it closed}$ and ${\it quasi}$-${\it positive}$. We establish a quasi-monotonicity property of Monge-Ampère masses, and moreover show the existence of solutions to degenerate complex Monge-Ampère equations in big classes, together with uniform a priori estimates. This extends to the hermitian context fundamental results of Boucksom-Eyssidieux-Guedj-Zeriahi.
topic: differential-geometry
tags:
  - pluripotential-theory
  - monge-ampere-equations
  - positivity
arxiv_id: "2406.01090v1"
arxiv_url: "https://arxiv.org/abs/2406.01090"
arxiv_submitted: "2024-06-03"
arxiv_updated: "2024-06-03"
summary: >-
  非閉な場合も含むBott–Chern $(1,1)$-類の体積と非多重極積をHermitian多様体へ拡張する。有界質量性と正体積の閉Bott–Chern類の存在によってFujikiクラスを特徴づけ、big類の退化複素Monge–Ampère方程式も解く。
abstract_en: >-
  We study the volumes of transcendental and possibly non-closed Bott-Chern $(1,1)$-classes on an arbitrary compact complex manifold $X$. We show that the latter belongs to the class $\mathcal{C}$ of Fujiki if and only if it has the $\textit{bounded mass property}$ -- i.e., its Monge-Ampère volumes have a uniform upper-bound -- and there exists a closed Bott-Chern class with positive volume. This yields a positive answer to a conjecture of Demailly-Păun-Boucksom. To this end we extend to the hermitian context the notion of non-pluripolar products of currents, allowing for the latter to be merely ${\it quasi}$-${\it closed}$ and ${\it quasi}$-${\it positive}$. We establish a quasi-monotonicity property of Monge-Ampère masses, and moreover show the existence of solutions to degenerate complex Monge-Ampère equations in big classes, together with uniform a priori estimates. This extends to the hermitian context fundamental results of Boucksom-Eyssidieux-Guedj-Zeriahi.
summary_en: ""
abstract_ja: >-
  任意のコンパクト複素多様体上で、超越的かつ非閉でもよいBott–Chern $(1,1)$-類の体積を研究する。有界質量性と正体積をもつ閉Bott–Chern類の存在がFujikiクラス所属と同値であることを示す。準閉・準正なカレントへ非多重極積を拡張し、Monge–Ampère質量の準単調性、big類における退化方程式の解と一様先験評価を確立する。
abstract_source_url: "https://arxiv.org/abs/2406.01090"
license_name: "Creative Commons Attribution 4.0 International"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2406.01090](https://arxiv.org/abs/2406.01090)
- **著者:** Sébastien Boucksom, Vincent Guedj, Chinh H. Lu
- **初回投稿日・最終更新日:** 2024年6月3日
- **主分類・副分類:** math.DG, math.AP, math.CV
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Kähler場合の非多重極積とbigコホモロジー類の多重ポテンシャル論を、非閉形式が現れるHermitian幾何へ拡張する。準閉・準正カレントに対する積を構成し、非閉性によって質量が代表に依存する問題を上下体積で扱う。

Monge–Ampère質量について準単調性を証明し、閉類では通常の体積と整合することを示す。これを用いて、有界質量性と正体積の閉Bott–Chern類の存在がコンパクト複素多様体のFujikiクラス所属を特徴づけることを得る。

さらに非閉big形式に付随する退化複素Monge–Ampère方程式の解を構成し、一様な先験評価を与える。一方、Hermitian設定での解の一意性や滑らかな密度に対する高階正則性は未解決と明記される。

## 背景と問題設定

基準Hermitian形式 $\omega_X$ に対する有界質量性は

$$
\operatorname{vol}(\omega_X)=\sup\left\{\int_X(\omega_X+dd^c\varphi)^n:\ \varphi\in C^\infty(X),\ \omega_X+dd^c\varphi>0\right\}<\infty
$$

である。Fujikiクラスでは成り立つが、逆向きには正体積の閉類という追加条件が必要になる。非閉類では最小特異性をもつカレントのMonge–Ampère質量が一定とは限らないため、同じ $dd^c$-類・特異性型に属するカレント上の上限と下限で体積を定める。

## 主結果

### 非多重極積（Theorem A）

$\operatorname{vol}(\omega_X)<\infty$ のコンパクトHermitian多様体上で、準閉・準正なカレント $T_1,\ldots,T_p$ に対する対称多重線形な非多重極積 $T_1\wedge\cdots\wedge T_p$ が一意に存在する。有界ポテンシャルの場合はBedford–Taylor積に一致し、多重微細位相で局所的であり、各 $T_i$ が正なら積も正である。

### Fujikiクラスの特徴づけ（Theorem C）

コンパクトHermitian多様体 $X$ について次は同値である。

1. $X$ はFujikiクラス $\mathcal C$ に属する。
2. $\operatorname{vol}(\omega_X)<\infty$ であり、$\operatorname{vol}(\alpha)>0$ を満たす閉類 $\alpha\in H^{1,1}_{BC}(X,\mathbf R)$ が存在する。

これはBoucksom–Demailly–Păun予想への肯定的回答である。

### 退化Monge–Ampère方程式（Theorem D）

$\theta$ をbigな実 $(1,1)$-形式、$0\le f\in L^p(X)$、$p>1$ とする。このとき $\sup_X\varphi=0$ を満たす $\theta$-psh関数と $c>0$ が存在し、

$$
(\theta+dd^c\varphi)^n=cf\omega_X^n,
\qquad V_\theta-C\le\varphi\le V_\theta
$$

が成り立つ。定数 $c$ は一意に定まり、$C$ は指定された幾何データと $p,\|f\|_p$ のみに依存する。

## 証明の見取り図

局所的に厳密多重劣調和関数を加え、切断近似したBedford–Taylor積を多重微細開集合上で貼り合わせることで、非閉形式に対する非多重極積を構成する。質量の準単調性と体積の連続性を確立し、正体積の閉類からKählerカレントを得てFujikiクラスを特徴づける。最後に包絡関数と一様評価を用い、指数捩れ方程式を経由する変形法で退化Monge–Ampère方程式を解く。

## 原論文との対応

- **Abstractページ:** [arXiv:2406.01090](https://arxiv.org/abs/2406.01090)
- **Introduction:** pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems A–D
- **論文構成の説明:** IntroductionおよびContents, pp. 1–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
