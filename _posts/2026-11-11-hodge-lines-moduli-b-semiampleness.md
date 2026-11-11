---
layout: paper
title: Semiampleness of Hodge line bundles and b-semiampleness of the moduli part
title_ja: Hodge線束の半豊富性とモジュライ部分のb半豊富性
authors: Zhengyu Hu, Kefeng Liu, Yang Shen
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: "We give proofs of Hodge semiampleness and b-semiampleness without using o-minimality. We establish a geometric semiampleness criterion for line bundles on proper algebraic spaces. Let $(X,D)$ be a log smooth pair with $X$ a proper algebraic space. For an integral polarizable pure variation of Calabi--Yau type on $X\\setminus D$ with unipotent local monodromy, let $L$ be its extended highest Hodge line. If $L$ is numerically integrable and has torsion combinatorial monodromy, then $L$ is semiample. We also prove semiampleness of extended Griffiths lines. We construct normal projective period compactifications on which a positive power of the Griffiths line extends to an ample line bundle.\n  As an application, we prove that the moduli b-divisor $\\mathbf{M}$ of a projective lc-trivial fibration over a normal algebraic variety is b-semiample, provided that the generic boundary is effective. Suppose further that the geometric generic pair is klt and its boundary is big, with\
  \ nonzero coefficients in a fixed finite set $I\\subset(0,1)\\cap\\mathbb{Q}$. Then $c\\mathbf{M}$ is b-Cartier and b-free for an integer $c>0$ depending only on the relative dimension and $I$. We extend b-semiampleness to analogous projective fibrations over normal complex analytic bases, assuming a global relative polarization and an invertible log pluricanonical sheaf pulled back from the base."
topic: algebraic-geometry
tags:
- hodge-theory
- positivity
- moduli
- birational-geometry
- singularities
arxiv_id: 2611.12744v1
arxiv_url: https://arxiv.org/abs/2611.12744
arxiv_submitted: '2026-11-09'
arxiv_updated: '2026-11-09'
summary: Hodge線束の半豊富性とlc自明ファイブレーションのモジュライ部分のb半豊富性に、o-minimalityを用いない証明を与える。数値的可積分性とtorsion combinatorial monodromyの下で、次数零の曲線の鎖の近傍自明化を大域切断へつなぎ、周期像の射影コンパクト化にも適用する。
abstract_en: ''
summary_en: The paper revisits semiampleness through a geometric criterion for line bundles on proper algebraic spaces. For Hodge lines, local trivializations near degree-zero curves are turned into global sections. Period compactifications and the moduli part of an lc-trivial fibration are the main applications. The authors present independent proofs using Hodge theory and algebraic geometry rather than o-minimality, with explicit numerical and monodromy hypotheses.
abstract_ja: Hodge線束の半豊富性を、古典的Hodge理論と代数幾何による局所自明化・切断降下の方法で証明する。適切な数値的条件と組合せ的モノドロミー条件の下で最高Hodge線束の半豊富性を得て、周期像の射影コンパクト化を構成する。一般ファイバー上の境界が有効な射影的lc自明ファイブレーションへ適用し、モジュライb因子のb半豊富性を導く。
abstract_source_url: https://arxiv.org/abs/2611.12744
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.12744v1](https://arxiv.org/abs/2611.12744)
- **著者:** Zhengyu Hu, Kefeng Liu, Yang Shen
- **初回投稿日:** 2026-11-09
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

nefな線束が半豊富であるか、すなわちある正の冪が大域切断で生成されるかは、局所的な曲率の非負性だけでは解決しない。Hodge線束では、次数零の曲線を収縮する写像を、特に退化境界の近くで構成することが難所になる。

本論文は、そのような曲線の連結鎖の近傍で線束の冪を自明化し、切断の持ち上げと有限降下を使って半豊富性へ進む方法を提示する。Bakker–Filipazzi–Mauri–Tsimermanによる半豊富性・コンパクト化の結果に対し、o-minimalityを使わない独立な証明を与えるという位置付けである。

応用は、Griffiths線束を豊富な線束として延長する周期像の射影コンパクト化と、標準束公式のモジュライ部分のb半豊富性である。一般のnef線束を無条件に半豊富とするのではなく、Hodge理論から得る近傍自明化と数値条件を明示的に用いる。

## 背景と問題設定

対数滑らかな対$(X,D)$上で、$U=X\setminus D$の整係数偏極可能純Hodge構造の変動を考える。最高の非零Hodgeフィルトレーションが階数1である場合をCY型と呼び、そのSchmid延長を$L$とする。曲率公式から得られるnef性を、収縮写像$q:X\to Y$と$L^a\simeq q^\ast A$（$a>0$、$A$は豊富）へ強めることが目標となる。

Introductionの説明では、数値的可積分性は境界を含む滑らかな試験空間上で、誘導周期写像が一般にimmersiveな場合のbignessを要求する。torsion combinatorial monodromyは、節点曲線の各正規化成分上でtorsionな線束が曲線全体でもtorsionとなることを要求する。これらの厳密な定義は原論文Definition 2.6に置かれている。

## 主結果

### 主定理1：Hodge線束の半豊富性（Theorem 1.1）

$X$を固有代数空間、$(X,D)$を対数滑らかな対とする。$X\setminus D$上の整係数偏極可能純CY型変動の局所モノドロミーをunipotentと仮定する。最高Hodge線のSchmid延長$L$が数値的可積分性とtorsion combinatorial monodromyを満たせば、$L$は半豊富である。

滑らかな射影$X$の場合、収縮の連結ファイバーはHodge次数零の曲線が生成する同値類と一致する。正規空間へ降下する場合には、解消上のHodge線束の正の冪が元の空間上の線束の引き戻しになるという降下条件を別に要する。

### 主定理2：周期像のコンパクト化（Theorem 1.2）

正規準射影多様体$Y$が、整係数偏極純Hodge構造の局所持ち上げ可能な準有限周期写像$Y^{\mathrm{an}}\to\Gamma\backslash D$を持つとする。$\Gamma$は偏極の整数等長群の離散部分群である。このとき$Y$には正規射影コンパクト化が存在し、Griffiths線束の正の降下冪がその上の豊富な線束の制限となる。群のneatnessを仮定しない点も含むが、代数構造と境界成長条件の詳細は本文Section 4に委ねられている。

### モジュライ部分のb半豊富性（Corollary 1.3）

射影的な代数的lc自明ファイブレーション$f:(V,\Delta)\to B$で、$B$が正規代数多様体、$\Delta$が有理因子であり、一般点$\eta$上で$\Delta\_\eta\ge0$とする。標準束公式

$$
K\_V+\Delta\sim\_{\mathbb Q} f^\ast (K\_B+B\_B+M\_B)
$$

のモジュライb因子$\mathbf M$はb半豊富となる。これはある双有理モデル上で、その正のCartier倍が大域生成されるという結論である。基底の固有性は要求しない。

さらに幾何学的一般ファイバーがkltで、境界がbig、非零係数が固定有限集合$I\subset(0,1)\cap\mathbb Q$に属する場合、相対次元$n$と$I$だけに依存する$c(n,I)>0$により$c\mathbf M$がb-Cartierかつb-freeとなる。複素解析的基底への拡張には、大域的相対偏極と対数複標準線束の基底からの引き戻しという追加仮定がある。

### 主定理3：幾何学的半豊富性判定（Theorem 1.4）

固有複素代数空間$X$上の線束$L$と、$X\_{\mathrm{red}}\times X\_{\mathrm{red}}$の閉代数的同値関係$R$を考える。ある共通の$a>0$について各$R$類の飽和解析的開近傍上で$L^a$が自明であり、$R$と横断的なすべての整閉部分空間$Z$上で$L|\_Z$がbigなら、$L$は半豊富である。横断性とは一般の$z\in Z$で$\dim(Z\cap R(z))=0$となることを指す。自明化は被約空間だけでなく冪零構造を含む$X$上で要求する。

## 証明の見取り図

切断を次元に関する帰納法で構成する。線束がbigでないときは完全な周期ファイバーを使って低次元の基底へ還元し、bigなときはKodaira消滅によって有効因子上の切断を持ち上げる。近傍自明化は非被約な厚みやconductorを越えた貼り合わせを支える。最小Hodge構造で貼り合わせ関係の有限性を確保し、組合せ的モノドロミーのtorsion性から不変な共変テンソルと近傍のフレームを作る。

標準束公式への応用では、alterationと必要に応じた最小lc層への随伴の後、モジュライ部分の倍を巡回被覆のHodge線束に対応させる。境界を越えて線束を比較し、モジュライ部分のb-abundanceと複標準表現の有限性によりHodge半豊富性の仮定を検証する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.12744)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.12744v1) — Section 1, pp. 1–4（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.4; Corollary 1.3; IntroductionによるCorollary 5.15とTheorem 5.18の説明
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.12744v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
